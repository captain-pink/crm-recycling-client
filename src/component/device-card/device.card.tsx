import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

type DeviceCardProps = {
  name: string;
  serial: string;
  deviceType: string;
};

export function DeviceCard({ name, serial, deviceType }: DeviceCardProps) {
  return (
    <Card elevation={0} sx={{ backgroundColor: "rgba(133, 131, 20, 0.05)" }}>
      <CardContent>
        <Container
          disableGutters
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "space-between",
            marginBottom: "16px",
          }}
        >
          <Typography sx={{ textTransform: "uppercase" }}>Device</Typography>
          <Typography>{name}</Typography>
        </Container>
        <Container
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Container
            disableGutters
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "space-between",
              marginRight: "32px",
            }}
          >
            <Typography sx={{ textTransform: "uppercase" }}>
              Serial number
            </Typography>
            <Typography>{serial}</Typography>
          </Container>

          <Container
            disableGutters
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "space-between",
            }}
          >
            <Typography sx={{ textTransform: "uppercase" }}>Type</Typography>
            <Typography>{deviceType}</Typography>
          </Container>
        </Container>
      </CardContent>
      <CardActions>
        <Button>Show more</Button>
      </CardActions>
    </Card>
  );
}
