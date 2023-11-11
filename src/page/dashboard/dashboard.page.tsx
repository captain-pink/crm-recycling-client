import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AddIcon from '@mui/icons-material/Add';

import { DeviceCard, Summary } from "../../component";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Modal } from "@mui/material";
import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";

const QUERY_STATS = gql`
query ManufacturerStats {
  queryManufacturerStats {
    total
    recycled
    totalRawWeight
  }
}
`

export function Dashboard() {
  const [addDeviceModalOpened, setAddDeviceModalOpened] = useState(false);
  const { data: { queryManufacturerStats } = {}, loading, error } = useQuery<{
    queryManufacturerStats: {
      total: number,
      recycled: number,
      totalRawWeight: number,
    }
  }>(QUERY_STATS, {
    fetchPolicy: 'network-only',
  });

  const handleAddDevice = () => {
    setAddDeviceModalOpened(true)
  }

  if (loading) {
    return (
      <Backdrop
        open={loading}
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, backdropFilter: 'blur(5px)', }}
      >
        <CircularProgress color="primary" />
      </Backdrop>
    )
  }

  if (error) {
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

      <Box height={'4rem'}/>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        marginBottom="1.5rem"
      >
        <Typography
          color="primary"
          variant="h5"
          fontWeight={400}
          fontSize={24}
        >
          Device list
        </Typography>
        <Button variant="contained" endIcon={<AddIcon/>} onClick={handleAddDevice}>
          Add device
        </Button>
      </Box>
      <Grid spacing={'1.5rem'} container>
        <Grid item xl={4} lg={4}>
          <DeviceCard
            name="Iphone 15 pro"
            deviceType="Phone"
          />
        </Grid>
        <Grid item xl={4} lg={4}>
          <DeviceCard
            name="Iphone 15 pro"
            deviceType="Phone"
          />
        </Grid>
        <Grid item xl={4} lg={4}>
          <DeviceCard
            name="Iphone 15 pro"
            deviceType="Phone"
          />
        </Grid>
        <Grid item xl={4} lg={4}>
          <DeviceCard
            name="Iphone 15 pro"
            deviceType="Phone"
          />
        </Grid>
      </Grid>
      <Modal open={addDeviceModalOpened} onClose={() => setAddDeviceModalOpened(false)}>
        <Box sx={{ borderRadius: '1rem', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '50%', height: '50%', backgroundColor: 'white' }}>

        </Box>
      </Modal>
      <Backdrop
        open={loading}
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, backdropFilter: 'blur(5px)', }}
      >
        <CircularProgress color="primary" />
      </Backdrop>
    </Container>
  );
}
