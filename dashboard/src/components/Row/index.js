import React, { useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PropTypes from "prop-types";

const Row = ({ rowData }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {rowData.websiteUrl}
        </TableCell>
        <TableCell align="right">{rowData.collectedAt}</TableCell>
        <TableCell align="right">{rowData.domLoad}</TableCell>
        <TableCell align="right">{rowData.fcp}</TableCell>
        <TableCell align="right">{rowData.ttfb}</TableCell>
        <TableCell align="right">{rowData.windowLoad}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="data_table-expanded-row" colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Network Timings
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>initiatorType</TableCell>
                    <TableCell>name</TableCell>
                    <TableCell align="right">duration</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowData.networkTimings.map((networkTiming, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {networkTiming.initiatorType}
                      </TableCell>
                      <TableCell>{networkTiming.name}</TableCell>
                      <TableCell align="right">
                        {networkTiming.duration}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default Row;

Row.propTypes = {
  message: PropTypes.shape({
    collectedAt: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    domLoad: PropTypes.number.isRequired,
    fcp: PropTypes.number.isRequired,
    networkTimings: PropTypes.array.isRequired,
    ttfb: PropTypes.number.isRequired,
    websiteUrl: PropTypes.string.isRequired,
    windowLoad: PropTypes.number.isRequired,
    __v: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
  }),
};
