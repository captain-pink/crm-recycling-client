import Container from "@mui/material/Container";
import { FC } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import { MenuLink } from "../../component/menu-link/menu.link.tsx";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MailIcon from "@mui/icons-material/Mail";
import { gql, useQuery } from "@apollo/client";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";


const QUERY_DEVICE = gql`
  query QueryDeviceInfo($manufacturerId: String!, $serialNumber: String!) {
    queryDeviceInfo(manufacturerId:$manufacturerId, serialNumber:$serialNumber) {
      manufacturerId
      serialNumber
      category
      components {
        material
        amount
      }
      isRecycled
      recycledBy
    }
  }
`

export interface Component {
  material: string;
  amount: number;
}

export interface Device {
  manufacturerId: string;
  serialNumber: string;
  category: string;
  components?: Array<Component>;
  isRecycled: boolean;
  recycledBy: string;
}

export const RecycleDevicePage: FC = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const manufacturerId = params.get('manufacturerId');
  const serialNumber = params.get('serialNumber');

  const { data, loading, error } = useQuery<{
    queryDeviceInfo: Device;
  }>(QUERY_DEVICE, {
    skip: !manufacturerId || !serialNumber,
    fetchPolicy: "network-only",
    variables: {
      manufacturerId: manufacturerId,
      serialNumber: serialNumber
    }
  });

  if (loading || error) {
    return (
      <Backdrop
        open={loading}
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backdropFilter: "blur(5px)",
        }}
      >
        <CircularProgress color="primary"/>
      </Backdrop>
    )
  }

  return (
    <Box sx={{ position: "relative" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "4rem",
          }}
        >
          <CardMedia
            loading="lazy"
            component="img"
            onClick={() => navigate("/")}
            sx={{
              width: "100px",
              objectFit: "contain",
              objectPosition: "center",
              cursor: "pointer",
            }}
            image="/logo.png"
          />

          <Box sx={{ display: "flex", gap: "1.5rem", padding: "1.5rem 0" }}>
            <MenuLink url={"/"} title={"Home."} />
            <MenuLink url={"/"} title={"About Us."} />
            <MenuLink url={"/"} title={"How it works."} />
            <MenuLink url={"/"} title={"Manufacturers."} />
            <MenuLink url={"/"} title={"Recycling Centers."} />
          </Box>

          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Button
              onClick={() => navigate("/login")}
              size={"large"}
              color="primary"
            >
              Login
            </Button>

            <Button
              onClick={() => navigate("/sign-up")}
              size={"large"}
              color="primary"
              variant="contained"
            >
              Get Started
            </Button>
          </Box>
        </Box>

        <Typography
          color={"primary"}
          variant="h1"
          fontWeight={600}
          fontSize={"4rem"}
          sx={{ display: "inline" }}
        >
          Recycle Your <br /> Device
        </Typography>
        <Button
          sx={{
            display: "inline-block",
            marginLeft: "1rem",
            transform: "translateY(-8px)",
          }}
          variant={"text"}
        >
          <Typography
            color={"#73EBB1"}
            fontWeight={500}
            fontSize={"1rem"}
            sx={{ textDecoration: "underline" }}
          >
            How to recycle my device?
          </Typography>
        </Button>

        <Box sx={{ height: "2.5rem" }} />

        <Grid container spacing={"1rem"}>
          <Grid
            item
            xs={4}
            lg={4}
            sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Card
              elevation={0}
              sx={{
                backgroundColor: "#EEF7F6",
                borderRadius: "1rem",
                border: "1px solid #2838410D",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <Box>
                <Typography
                  color={"#000000DE"}
                  variant="body1"
                  fontSize="0.75rem"
                  fontWeight={400}
                  sx={{ textTransform: "uppercase" }}
                >
                  Device
                </Typography>
                <Typography
                  color={"primary"}
                  variant="h1"
                  fontWeight={500}
                  fontSize={"1.25rem"}
                >
                  iPhone 15Pro
                </Typography>
              </Box>

              <Box>
                <Typography
                  color={"#000000DE"}
                  variant="body1"
                  fontSize="0.75rem"
                  fontWeight={400}
                  sx={{ textTransform: "uppercase" }}
                >
                  Type
                </Typography>
                <Typography
                  color={"primary"}
                  variant="h6"
                  fontWeight={400}
                  fontSize={"1rem"}
                >
                  iPhone 15Pro
                </Typography>
              </Box>

              <Box>
                <Typography
                  color={"#000000DE"}
                  variant="body1"
                  fontSize="0.75rem"
                  fontWeight={400}
                  sx={{ textTransform: "uppercase" }}
                >
                  Raw materials
                </Typography>

                {data?.queryDeviceInfo.components?.map((c) => (
                  <Box
                    sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
                  >
                    <Typography
                      color={"primary"}
                      variant="body1"
                      fontSize="0.875rem"
                      fontWeight={400}
                    >
                      {c.material}
                    </Typography>
                    <Box
                      sx={{
                        height: "1.5rem",
                        flexGrow: 1,
                        borderBottom: "1px dashed #2838411A",
                        transform: "translateY(-0.5rem)",
                      }}
                    />
                    <Typography
                      color={"primary"}
                      variant="body1"
                      fontSize="1rem"
                      fontWeight={400}
                    >
                      {c.amount} g
                    </Typography>
                  </Box>
                ))}

              </Box>
            </Card>

            <Button
              sx={{ borderRadius: ".5rem" }}
              type="submit"
              color={"primary"}
              variant="contained"
              endIcon={<MailIcon />}
            >
              Print prepaid envelope
            </Button>
          </Grid>

          <Grid item xs={8} lg={8}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Box sx={{ display: "flex", gap: "1rem" }}>
                <Card
                  elevation={0}
                  sx={{
                    backgroundColor: "#C9F7FF",
                    borderRadius: "1rem",
                    border: "1px solid #2838410D",
                    padding: "4rem 1rem 1rem 1rem",
                  }}
                >
                  <Typography
                    color={"#000000DE"}
                    variant="body1"
                    fontSize="0.75rem"
                    fontWeight={400}
                    sx={{ textTransform: "uppercase" }}
                  >
                    Your cashback
                  </Typography>
                  <Typography
                    color={"primary"}
                    variant="h3"
                    lineHeight={"56px"}
                    fontSize={"48px"}
                  >
                    € 253
                  </Typography>
                </Card>
                <Card
                  elevation={0}
                  sx={{
                    backgroundColor: "#EEF7F6",
                    borderRadius: "1rem",
                    border: "1px solid #2838410D",
                    padding: "1rem 1rem 1rem 1rem",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <Typography
                    color={"#000000DE"}
                    variant="body1"
                    fontSize="0.75rem"
                    fontWeight={400}
                    sx={{ textTransform: "uppercase" }}
                  >
                    Recycling centres
                  </Typography>
                  <Box>
                    <Typography
                      color={"#000000DE"}
                      variant="h3"
                      fontSize={"1rem"}
                      fontWeight={500}
                    >
                      Amsterdam
                    </Typography>

                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography
                        color={"#00000099"}
                        variant="h3"
                        fontSize={"0.75rem"}
                        fontWeight={400}
                      >
                        Kinkerstraat, 154, 1122AB
                      </Typography>
                      <Typography
                        color={"#283841DE"}
                        variant="h3"
                        fontSize={"1rem"}
                        fontWeight={400}
                      >
                        1353 m
                      </Typography>
                    </Box>
                  </Box>

                  <Box>
                    <Typography
                      color={"#000000DE"}
                      variant="h3"
                      fontSize={"1rem"}
                      fontWeight={500}
                    >
                      Amsterdam
                    </Typography>

                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography
                        color={"#00000099"}
                        variant="h3"
                        fontSize={"0.75rem"}
                        fontWeight={400}
                      >
                        Overtoom, 152, 1123CD
                      </Typography>
                      <Typography
                        color={"#283841DE"}
                        variant="h3"
                        fontSize={"1rem"}
                        fontWeight={400}
                      >
                        453 m
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Box>
              <Box sx={{ display: "flex", gap: "1rem", position: "relative" }}>
                <CardMedia
                  loading="lazy"
                  component="img"
                  sx={{
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    cursor: "pointer",
                    borderRadius: "1rem",
                  }}
                  image="/map.png"
                />
                <Typography
                  color={"#283841DE"}
                  variant="h3"
                  fontSize={"1.25rem"}
                  fontWeight={500}
                  sx={{ position: "absolute", top: "1rem", left: "1rem" }}
                >
                  Recycling facilities near you
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ height: "3rem" }} />

        <Box
          sx={{
            display: "flex",
            gap: "1.5rem",
            padding: "1.5rem 0",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography color={"primary"} fontSize={"1rem"} fontWeight={300}>
            © 2023 Re* - All Rights Reserved.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: "1.5rem",
              padding: "1.5rem 0",
              alignItems: "center",
            }}
          >
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Typography color={"primary"} fontSize={"1rem"} fontWeight={300}>
                Terms & Conditions
              </Typography>
            </Link>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Typography color={"primary"} fontSize={"1rem"} fontWeight={300}>
                Privacy Policy
              </Typography>
            </Link>
          </Box>
        </Box>
      </Container>

      <Box
        sx={{
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
          width: "100%",
          height: "100vh",
          backgroundImage: 'url("/image-18.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: -1,
        }}
      />
    </Box>
  );
};
