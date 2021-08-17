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
    const [area, useArea] = useState('')
    const [breakFast, useBreakFast] = useState(0)
    const [lunch, useLunch] = useState(0)
    const [dinner, useDinner] = useState(0)


    const HandleName=(e)=>{
      console.log(e.target.value)
      useName(e.target.value)
      console.log(name)
    }
    const HandleArea=(e)=>{
      console.log(e.target.value)
      useArea(e.target.value)
    }
    const HandleBreakFast=(e)=>{
      console.log(e.target.value)
      useBreakFast(e.target.value)
    }
    const HandleLunch=(e)=>{
      console.log(e.target.value)
      useLunch(e.target.value)
    }
    const HandleDinner=(e)=>{
      console.log(e.target.value)
      useDinner(e.target.value)
    }
  

    const postCutomers =(name, address, lunch, breakfast, dinner )=>{
      axios.post('http://localhost:4000//newcustomer', {
        name, 
        address,
        lunch,
        breakfast, 
        dinner
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
          label="Area name"
          style={{ margin: 8 }}
          placeholder="Area Name"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange = {HandleArea}
        />
        <TextField
          required
          id="outlined-full-width"
          label="BreakFast"
          style={{ margin: 8 }}
          placeholder="BreakFast"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange = {HandleBreakFast}
        />
        <TextField
          required
          id="outlined-full-width"
          label="Lunch"
          style={{ margin: 8 }}
          placeholder="Lunch"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange = {HandleLunch}
        />
        <TextField
          required
          id="outlined-full-width"
          label="Dinner"
          style={{ margin: 8 }}
          placeholder="Dinner"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange = {HandleDinner}
        />
        </div>
    </form>
  {
    boolVal === true? sendData(name, area, lunch, breakFast, dinner):null
  }
  </>
    )
}
const mapStateToProps=(state)=>({
  boolVal:state.boolVal
})

export default connect (mapStateToProps, {sendData})(Addcutomers)