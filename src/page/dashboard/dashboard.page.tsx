import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";

import {
  DeviceCard,
  Summary,
  DeviceTable,
  AddDeviceModelDialogComponent,
  DeviceModel,
} from "../../component";
import { QUERY_DEVICE_MODELS, QUERY_STATS } from "../../api/query";
import { MUTATION_CREATE_DEVICE_CATEGORY } from "../../api/mutation";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const navigate = useNavigate();
  const [addDeviceModalOpened, setAddDeviceModalOpened] = useState(false);
  const {
    data: { queryManufacturerStats } = {},
    loading,
    error,
  } = useQuery<{
    queryManufacturerStats: {
      total: number;
      recycled: number;
      totalRawWeight: number;
    };
  }>(QUERY_STATS, {
    fetchPolicy: "network-only",
  });

  const {
    data: { queryDeviceCategories } = {},
    // loading,
    // error,
  } = useQuery<{
    queryDeviceCategories: Array<DeviceModel>;
  }>(QUERY_DEVICE_MODELS, {
    fetchPolicy: "network-only",
  });

  // TODO: To process error and loading cases
  const [saveDeviceModel] = useMutation(MUTATION_CREATE_DEVICE_CATEGORY, {
    refetchQueries: [QUERY_DEVICE_MODELS],
  });

  const handleAddDevice = () => {
    setAddDeviceModalOpened(true);
  };

  const handleSaveDeviceModel = async (deviceModel: DeviceModel) => {
    const { type: deviceType, materials, title: category } = deviceModel;

    saveDeviceModel({
      variables: {
        deviceType,
        category,
        components: materials.map(({ amount, name }) => ({
          material: name,
          amount,
        })),
      },
    });
  };

  if (loading) {
    return (
      <Backdrop
        open={loading}
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backdropFilter: "blur(5px)",
        }}
      >
        <CircularProgress color="primary" />
      </Backdrop>
    );
  }

  if (error) {
    navigate("/login");

    return null;
  }

  return (
    <Container disableGutters sx={{ padding: "64px 144px" }}>
      <Typography
        color="primary"
        variant="h4"
        fontWeight={400}
        fontSize={34}
        marginBottom="1.5rem"
      >
        Dashboard
      </Typography>
      <Summary
        total={queryManufacturerStats!.total}
        recycled={queryManufacturerStats!.recycled}
        totalRawWeight={queryManufacturerStats!.totalRawWeight}
      />

      <Box height={"4rem"} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        marginBottom="1.5rem"
      >
        <Typography color="primary" variant="h5" fontWeight={400} fontSize={24}>
          Device Models
        </Typography>
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          onClick={handleAddDevice}
        >
          Add Device Model
        </Button>
      </Box>
      <Grid spacing={"1.5rem"} container>
        {queryDeviceCategories?.map(({ title, type }: DeviceModel) => (
          <Grid item xl={4} lg={4}>
            <DeviceCard name={title} deviceType={type} />
          </Grid>
        ))}
      </Grid>
      <AddDeviceModelDialogComponent
        onSave={handleSaveDeviceModel}
        open={addDeviceModalOpened}
        onClose={() => setAddDeviceModalOpened(false)}
      />
      <Backdrop
        open={loading}
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backdropFilter: "blur(5px)",
        }}
      >
        <CircularProgress color="primary" />
      </Backdrop>

      <Container disableGutters sx={{ marginTop: "64px" }}>
        <Typography
          sx={{ marginBottom: "24px" }}
          color="primary"
          variant="h5"
          fontWeight={400}
          fontSize={24}
        >
          Devices
        </Typography>
        <DeviceTable />
      </Container>
    </Container>
  );
}
