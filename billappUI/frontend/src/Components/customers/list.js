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
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import {Link} from 'react-router-dom'
import { Skeleton,Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

const columns = [
  { id: 'checkbox', label: '', minWidth: 170 ,},
  { id: 'name', label: 'Name', minWidth: 170 ,},
  { id: 'code', label: 'Company name', minWidth: 100 },
  {
    id: 'population',
    label: 'Phone number',
    minWidth: 170,
  },
  {
    id: 'size',
    label: 'Email',
    minWidth: 170,
  },
  {
    id: 'density',
    label: 'Delete',
    minWidth: 170,
  },
];
const rows = []
function createData(name, code, population, size) {
 
  return { name, code, population, size};
}


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});


export default function CustomerTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const [allcustomers, setAllcustomers]= useState('')
  useEffect(()=>{
    axios.get('https://digitechusers.herokuapp.com/customers')
    .then((res)=>{
        console.log(res.data.customers)
        setAllcustomers(res.data.customers)
        rows = allcustomers
    }).catch((err)=>{
        console.log(err)
    })
}, [])



const [state, setState] = React.useState({
  checkedA: true,
  checkedB: true,
});





function handleDelete() {
  confirm({
    title: 'Are you sure you want to delete?',
    icon: <ExclamationCircleOutlined />,
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('Oops errors!'));
    },
    onCancel() {},
  });
}




 //console.log(allcustomers)
  return (
    <>
    
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {allcustomers.length?allcustomers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                <TableCell component="th" scope="row">
                <Link to={`/allcustomers/${row.id}`}>
                <Checkbox/>
                </Link>
              
              </TableCell>
                <TableCell component="th" scope="row">
                {row.customer_name}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.company_name}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.contact_info}
              </TableCell>
              <TableCell component="th" scope="row">
                
              </TableCell>
              <TableCell component="th" scope="row">
               <DeleteIcon style = {{"cursor":"pointer"}} onClick={handleDelete}/>
              </TableCell>
                </TableRow>
              );
            }):<Skeleton/>}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={allcustomers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    </>
  );
}