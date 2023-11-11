import { gql } from "@apollo/client";

export const MUTATION_CREATE_DEVICE_CATEGORY = gql`
  mutation CreateDeviceCategory(
    $category: String!
    $components: [ComponentInput!]!
    $deviceType: DeviceType!
  ) {
    createDeviceCategory(
      category: $category
      components: $components
      deviceType: $deviceType
    ) {
      status
    }
  }
`;
