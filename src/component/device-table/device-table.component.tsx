import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { useQuery } from "@apollo/client";

import { Device } from "../../api/type";
import { QUERY_DEVICES } from "../../api/query";
import Typography from "@mui/material/Typography";

export function DeviceTable() {
  const {
    data: { queryDevices } = {},
    loading,
    error,
  } = useQuery<{
    queryDevices: Array<Device>;
  }>(QUERY_DEVICES, {
    fetchPolicy: "network-only",
  });

  if (error || loading) {
    return null;
  }

  if (!queryDevices?.length) {
    return (
      <Typography
        color="primary"
        variant="h5"
        fontWeight={300}
        fontSize={'1rem'}
        textAlign={'center'}
        sx={{ padding: '5rem 2rem', margin: '0 auto' }}
      >
        No Devices Found.
      </Typography>
    );
  }

  return (
    <TableContainer
      elevation={0}
      component={Paper}
      sx={{ borderRadius: "8px" }}
    >
      <Table sx={{ minWidth: 700 }} aria-label="Devices table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Serial number</TableCell>
            <TableCell align="left">Recycled by</TableCell>
            <TableCell align="left">Recycled Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {queryDevices?.map((row: Device) => (
            <TableRow key={row.category}>
              <TableCell component="th" scope="row">
                {row.category}
              </TableCell>
              <TableCell align="left">{row.serialNumber}</TableCell>
              <TableCell align="left">{row.recycledBy}</TableCell>
              <TableCell align="left">
                {row.isRecycled ? (
                  <DoneIcon sx={{ color: "#73EBB1" }} />
                ) : (
                  <CloseIcon sx={{ color: "#FF8264" }} />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
