import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { FC } from "react";

interface SummaryCardProps {
  title: string;
  amount: number;
  unit?: string;
}

export const SummaryCard: FC<SummaryCardProps> = (props) => (
  <Card
    sx={{
      border: '1px solid #2838410D',
      borderRadius: '1rem',
      padding: '1rem',
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    }}
    elevation={0}
  >
    <Typography
      color={'primary.light'}
      variant="h3"
      lineHeight={'28px'}
      fontSize={'16px'}
    >
      {props.title}
    </Typography>
    <Typography
      color={'primary'}
      variant="h3"
      lineHeight={'56px'}
      fontSize={'48px'}
    >
      {`${props.amount.toLocaleString("en-US")} ${props.unit || ''}`}
    </Typography>
  </Card>
)
