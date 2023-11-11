import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { Summary, DeviceCard } from "../../component";

export function Dashboard() {
  return (
    <Container disableGutters sx={{ padding: "64px 144px" }}>
      <Typography
        variant="h4"
        fontSize={34}
        fontWeight={400}
        marginBottom="24px"
      >
        Dashboard
      </Typography>
      <Summary />
      <Grid spacing={5} marginTop="64px" container>
        <Grid item xl={4} lg={4}>
          <DeviceCard
            name="Iphone 15 pro"
            serial="ABD64231"
            deviceType="Phone"
          />
        </Grid>
        <Grid item xl={4} lg={4}>
          <DeviceCard
            name="Iphone 15 pro"
            serial="ABD64231"
            deviceType="Phone"
          />
        </Grid>
        <Grid item xl={4} lg={4}>
          <DeviceCard
            name="Iphone 15 pro"
            serial="ABD64231"
            deviceType="Phone"
          />
        </Grid>
        <Grid item xl={4} lg={4}>
          <DeviceCard
            name="Iphone 15 pro"
            serial="ABD64231"
            deviceType="Phone"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
