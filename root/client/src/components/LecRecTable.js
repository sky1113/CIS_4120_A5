import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

function createData(time, section, location) {
  return { time, section, location };
}

const rows = [
  createData("MWF 12:00-12:59 PM", "001", "McNeil 103"),
  createData("MWF 12:00-12:59 PM", "001", "McNeil 103"),
];

export default function LecRecTable() {
  const tableStyle = {
    height: "100%",
    fontSize: "40px",
  };

  const tableContainerStyle = {
    overflow: "visible",
  };

  return (
    <TableContainer component={Paper} elevation={0} style={tableContainerStyle}>
      <Table style={tableStyle} size="small">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6">Time</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="h6">Section</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="h6">Location</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.section}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.time}
              </TableCell>
              <TableCell align="left">{row.section}</TableCell>
              <TableCell align="left">{row.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
