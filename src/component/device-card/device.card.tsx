import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

type DeviceCardProps = {
  name: string;
  deviceType: string;
};

export function DeviceCard({ name, deviceType }: DeviceCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        backgroundColor: "#E3F1F099",
        position: "relative",
        border: "1px solid #2838410D",
        borderRadius: "1rem",
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
          }}
        >
          <Typography
            color={"#000000DE"}
            variant="body1"
            fontSize="0.75rem"
            fontWeight={400}
            sx={{ textTransform: "uppercase" }}
          >
            Device
          </Typography>
          <Typography color={"primary"} variant="body1" fontSize="20px" fontWeight={500} marginBottom={'.5rem'}>
            {name}
          </Typography>

          <Typography
            color={"#000000DE"}
            variant="body1"
            fontSize="0.75rem"
            fontWeight={400}
            sx={{ textTransform: "uppercase" }}
          >
            Type
          </Typography>
          <Typography marginTop={'5px'} lineHeight={1} color="primary" variant="body1" fontSize="16px" fontWeight={400}>
            {deviceType.charAt(0).toUpperCase() + deviceType.slice(1).toLowerCase()}
          </Typography>
        </Container>
      </CardContent>
      <CardActions sx={{
        position: 'absolute',
        bottom: '0',
        right: '0',
      }}>
        <Button size={"small"}>Open details</Button>
      </CardActions>
    </Card>
  );
}
