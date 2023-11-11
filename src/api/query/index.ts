import { gql } from "@apollo/client";

export const QUERY_DEVICES = gql`
  query QueryDevices {
    queryDevices {
      manufacturerId
      serialNumber
      isRecycled
      category
    }
  }
`;

export const QUERY_DEVICE_MODELS = gql`
  query DeviceModels {
    queryDeviceCategories {
      title: category
      materials: components {
        amount
        name: material
      }
      type: deviceType
    }
  }
`;

export const QUERY_STATS = gql`
  query ManufacturerStats {
    queryManufacturerStats {
      total
      recycled
      totalRawWeight
    }
  }
`;
