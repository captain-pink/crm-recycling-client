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
    <Card
      elevation={0}
      sx={{
        backgroundColor: "#2838410D",
        border: "1px solid #2838410D",
        borderRadius: "16px",
      }}
    >
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
          <Typography
            variant="body1"
            fontSize="14px"
            fontWeight={400}
            sx={{ textTransform: "uppercase" }}
          >
            Device
          </Typography>
          <Typography variant="body1" fontSize="20px" fontWeight={500}>
            {name}
          </Typography>
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
            <Typography
              variant="body1"
              fontSize="14px"
              fontWeight={400}
              sx={{ textTransform: "uppercase" }}
            >
              Serial number
            </Typography>
            <Typography variant="body1" fontSize="16px" fontWeight={400}>
              {serial}
            </Typography>
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
            <Typography
              variant="body1"
              fontSize="14px"
              fontWeight={400}
              sx={{ textTransform: "uppercase" }}
            >
              Type
            </Typography>
            <Typography variant="body1" fontSize="16px" fontWeight={400}>
              {deviceType}
            </Typography>
          </Container>
        </Container>
      </CardContent>
      <CardActions>
        <Button>Open details</Button>
      </CardActions>
    </Card>
  );
}
