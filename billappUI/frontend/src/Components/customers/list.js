import React, {useEffect, useState}from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import Switch from "@material-ui/core/Switch";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
export default function CustomerTable() {
  const classes = useStyles();

  const [allcustomers, setAllcustomers]= useState('')
  useEffect(()=>{
    axios.get('https://digitechusers.herokuapp.com/customers')
    .then((res)=>{
        console.log(res.data.customers)
        setAllcustomers(res.data.customers)
    }).catch((err)=>{
        console.log(err)
    })
}, [])

const [state, setState] = React.useState({
  checkedA: true,
  checkedB: true,
});

const HandleCheck=()=>{
  console.log('checkbox button')
  // axios.get
}



function handleSwitchChange (event) {
  setState(event.target.checked);
  //setState({ ...state, [event.target.name]: event.target.checked })
  // Add actions here for when the switch is triggered
};

 //console.log(allcustomers)
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell></TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allcustomers.length?allcustomers.map((customer) => (
            <TableRow key = {customer.id}>
            <TableCell component="th" scope="row">
            <Checkbox
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
        onClick={HandleCheck}
      />
              </TableCell>
              
              <TableCell component="th" scope="row">
                {customer.customer_name}
              </TableCell>

              <TableCell align="left">
              <FormControlLabel
        control={<Switch onChange={handleSwitchChange} color="primary" name="checkedA"/>}
      />
              
              
              </TableCell>
              <TableCell align="left">
             
                  <DeleteIcon/>
              
              </TableCell>
            </TableRow>
          )):null}
        </TableBody>
      </Table>
    </TableContainer>
  );
}