import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Row from '../Row/index'

const DataTable = ({data}) => {
  return (
    <TableContainer className="data_table"  component={Paper}>
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
        {data.map((row,index) => (
          <Row key={index} rowData={row} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default DataTable

// function createData(name, calories, fat, carbs, protein, price) {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//     price,
//     history: [
//       {
//         date: '2020-01-05',
//         customerId: '11091700',
//         amount: 3,
//       },
//       {
//         date: '2020-01-02',
//         customerId: 'Anonymous',
//         amount: 1,
//       },
//     ],
//   };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
//   createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
// ];