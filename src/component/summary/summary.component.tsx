import { FC } from "react";
import Box from "@mui/material/Box";
import { SummaryCard } from "./summary-card.component.tsx";

export const Summary: FC = () => {
  // TODO: fetch data from API

  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '1.5rem',
      }}
    >
      <SummaryCard title="Total Devices" amount={10426}/>
      <SummaryCard title="Recycled Devices" amount={5275}/>
      <SummaryCard title="Total raw materials weight" amount={286} unit={'g'}/>
    </Box>
  );
};
