import "dotenv/config";

import * as s3 from "aws-cdk-lib/aws-s3";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";
import * as cloudfront_origins from "aws-cdk-lib/aws-cloudfront-origins";
import { CfnOutput, RemovalPolicy, Stack, App } from "aws-cdk-lib";
import * as iam from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";
import path from "path";

interface StaticSiteProps {
  bucketName: string;
}

export class StaticSite extends Stack {
  constructor(
    parent: Construct,
    name: string,
    props: StaticSiteProps = { bucketName: "crm-recycle-bucket-client" }
  ) {
    super(parent, name);

    const cloudfrontOAI = new cloudfront.OriginAccessIdentity(
      this,
      "cloudfront-OAI",
      {
        comment: `OAI for ${name}`,
      }
    );

    const siteBucket = new s3.Bucket(this, props.bucketName, {
      bucketName: props.bucketName,
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: RemovalPolicy.DESTROY, // NOT recommended for production code
      autoDeleteObjects: true, // NOT recommended for production code
    });

    // Grant access to cloudfront
    siteBucket.addToResourcePolicy(
      new iam.PolicyStatement({
        actions: ["s3:GetObject"],
        resources: [siteBucket.arnForObjects("*")],
        principals: [
          new iam.CanonicalUserPrincipal(
            cloudfrontOAI.cloudFrontOriginAccessIdentityS3CanonicalUserId
          ),
        ],
      })
    );

    new CfnOutput(this, "Bucket", { value: siteBucket.bucketName });

    const distribution = new cloudfront.Distribution(this, "SiteDistribution", {
      minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
      defaultBehavior: {
        origin: new cloudfront_origins.S3Origin(siteBucket, {
          originAccessIdentity: cloudfrontOAI,
        }),
        compress: true,
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      errorResponses: [
        {
          httpStatus: 403,
          responsePagePath: "/index.html",
          responseHttpStatus: 200,
        },
      ],
    });

    new CfnOutput(this, "Distribution ID", {
      value: `https://${distribution.distributionDomainName}`,
    });

    const deployment = new s3deploy.BucketDeployment(
      this,
      "DeployWithInvalidation",
      {
        sources: [s3deploy.Source.asset(path.join("./dist"))],
        destinationBucket: siteBucket,
        distribution,
        distributionPaths: ["/*"],
      }
    );

    new CfnOutput(this, "BucketWebsiteUrl", {
      value: deployment.deployedBucket.bucketWebsiteUrl,
    });
  }
}

const app = new App();
new StaticSite(app, "CrmRecyclingClientStack");

app.synth();
