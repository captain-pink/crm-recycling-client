import { FC } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export interface StepCardProps {
  iconUrl: string;
  description: string;
}

export const StepCard: FC<StepCardProps> = (props) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <Card sx={{
        justifySelf: 'center',
        backgroundColor: '#D3FBD8',
        width: '160px',
        height: '160px',
        borderRadius: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <CardMedia sx={{ height: '60px', width: '60px' }} component="img" image={props.iconUrl}/>
      </Card>
      <Typography
        color={"#000000DE"}
        variant="body1"
        fontSize="12px"
        fontWeight={400}
        sx={{ textTransform: "uppercase", textAlign: 'center', textWrap: 'balance' }}
      >
        {props.description}
      </Typography>
    </Box>
  );
}
