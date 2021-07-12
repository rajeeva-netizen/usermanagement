import React, {useEffect, useState}from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
export default function CustomerTable() {
  const classes = useStyles();

  const [allcustomers, setAllcustomers]= useState('')
  useEffect(()=>{
    axios.get('http://localhost:4000/customers')
    .then((res)=>{
        console.log(res.data)
        setAllcustomers(res.data)
    }).catch((err)=>{
        console.log(err)
    })
}, [])
// console.log(allcustomers)
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Area</TableCell>
            <TableCell align="right">Breakfast</TableCell>
            <TableCell align="right">Lunch</TableCell>
            <TableCell align="right">Dinner</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allcustomers.length?allcustomers.map((customer) => (
            <TableRow key={customer.name}>
              <TableCell component="th" scope="row">
                {customer.Name}
              </TableCell>
              <TableCell align="right">{customer.Area}</TableCell>
              <TableCell align="right">{customer.Breakfast}</TableCell>
              <TableCell align="right">{customer.Lunch}</TableCell>
              <TableCell align="right">{customer.Dinner}</TableCell>
            </TableRow>
          )):null}
        </TableBody>
      </Table>
    </TableContainer>
  );
}