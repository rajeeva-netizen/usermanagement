import React, {useState}from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux'
import {sendData} from '../../Actions/submitActions'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '50ch',
      },
    },
  }));

  
function Addcutomers({boolVal, sendData}) {
console.log(boolVal)
    const [name, useName] = useState('')
    const [Comp, useComp] = useState('')
    const [Address, useAddress] = useState(0)
    const [contact, useContact] = useState(0)
 


    const HandleName=(e)=>{
      console.log(e.target.value)
      useName(e.target.value)
      console.log(name)
    }
    const HandleComp=(e)=>{
      console.log(e.target.value)
      useComp(e.target.value)
    }
    const HandleAdd=(e)=>{
      console.log(e.target.value)
      useAddress(e.target.value)
    }
    const HandleContact=(e)=>{
      console.log(e.target.value)
      useContact(e.target.value)
    }
    
  

    const postCutomers =(name, company, address, info )=>{
      axios.post('https://digitechusers.herokuapp.com/newcustomer', {
        name, company, address, info 
      }).then((res)=>{
        console.log(res)
      }).catch(err=>console.log(err))
    }
    const classes = useStyles();
    return (
      <>
    <form className={classes.root} noValidate autoComplete="off">
        <div>
        <TextField
          required    
          id="outlined-full-width"
          label="Customer Name"
          style={{ margin: 8 }}
          placeholder="Name"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange = {HandleName}
        />
        <TextField
          required
          id="outlined-full-width"
          label="Company"
          style={{ margin: 8 }}
          placeholder="Company name"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange = {HandleComp}
        />
        <TextField
          required
          id="outlined-full-width"
          label="Address"
          style={{ margin: 8 }}
          placeholder="Address"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange = {HandleAdd}
        />
        <TextField
          required
          id="outlined-full-width"
          label="Contact number"
          style={{ margin: 8 }}
          placeholder="Contact number"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange = {HandleContact}
        />

        </div>
    </form>
  {
    boolVal === true? postCutomers(name, Comp, Address, contact):null
  }
  </>
    )
}
const mapStateToProps=(state)=>({
  boolVal:state.boolVal
})

export default connect (mapStateToProps, {sendData})(Addcutomers)