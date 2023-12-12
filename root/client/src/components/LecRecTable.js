import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

export default function LecRecTable(props) {
  const { meetings } = props;

  const tableStyle = {
    height: "100%",
    fontSize: "40px",
  };

  const tableContainerStyle = {
    overflow: "visible",
  };

  if (!meetings) {
    return <div>Loading...</div>; // Or any other loading state representation
  }

  return (
    <TableContainer component={Paper} elevation={0} style={tableContainerStyle}>
      <Table style={tableStyle} size="small">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6">Time</Typography>
            </TableCell>
            {/* <TableCell align="left">
              <Typography variant="h6">Section</Typography>
            </TableCell> */}
            <TableCell align="left">
              <Typography variant="h6">Location</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {meetings.map((row) => (
            <TableRow
              key={row.section}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.days + " " + row.begin_time + " - " + row.end_time}
              </TableCell>
              <TableCell align="left">
                {row.building_code + " " + row.room_code}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
