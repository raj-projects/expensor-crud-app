import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function TransactionsList({ transactions, fetchTransaction }) {
  async function remove(_id) {
    if (!window.confirm('Are you sure?')) return;
    const res = await fetch(`http://localhost:4000/transaction/${_id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      fetchTransaction();
      window.alert('Delete successfully');
    }
  }

  return (
    <Box sx={{ marginTop: 5 }}>
      <Typography variant="h6">Transaction Lists</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="Transactions List">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="center">Amount</TableCell>
              <TableCell align="center">Descriptions</TableCell>
              <TableCell align="center">Transaction Date</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((trx, i) => (
              <TableRow
                key={trx._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{i + 1}</TableCell>
                <TableCell align="center">{trx.amount}</TableCell>
                <TableCell align="center">{trx.description}</TableCell>
                <TableCell align="center">{trx.date}</TableCell>
                <TableCell align="center">
                  <IconButton
                    color="primary"
                    aria-label="Edit"
                    component="label"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="warning"
                    aria-label="Delete"
                    component="label"
                    onClick={() => remove(trx._id)}
                  >
                    <DeleteForeverIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
