import { FC } from "react";
import Box from "@mui/material/Box";
import { SummaryCard } from "./summary-card.component.tsx";

interface SummaryProps {
  total: number,
  recycled: number,
  totalRawWeight: number,
}

export const Summary: FC<SummaryProps> = (props) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '1.5rem',
      }}
    >
      <SummaryCard title="Total Devices" amount={props.total}/>
      <SummaryCard title="Recycled Devices" amount={props.recycled}/>
      <SummaryCard title="Total raw materials weight" amount={props.totalRawWeight} unit={'g'}/>
    </Box>
  );
};
