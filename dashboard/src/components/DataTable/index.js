import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Row from "../Row/index";
import PropTypes from "prop-types";

const DataTable = ({ data }) => {
  return (
    <TableContainer className="data_table" component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>websiteUrl</TableCell>
            <TableCell align="right">collectedAt</TableCell>
            <TableCell align="right">domLoad</TableCell>
            <TableCell align="right">fcp</TableCell>
            <TableCell align="right">ttfb</TableCell>
            <TableCell align="right">windowLoad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <Row key={index} rowData={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;

DataTable.propTypes = {
  data:PropTypes.array.isRequired
}