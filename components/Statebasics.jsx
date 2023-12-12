import { Button, TextField, Typography } from '@mui/material'
import React,{useState} from 'react'

export const Statebasics = () => {
    // var name="Aromal"
    var[fname,setFname]=useState("Aromal")
    var[val,setVal]=useState()


const changeName=()=>{
    setFname(val)
    setFname("")
}

const inputHandler=(e)=>{
console.log(e.target.value)
setVal(e.target.value)
}
  return (
    <div>
        <Typography>My name is {fname}</Typography><br /><br />
        <TextField variant='outlined'label="Enter Name"onChange={inputHandler}value={val}/><br /><br />
        <Button variant='contained'onClick={changeName}>Change</Button>
    </div>
  )
}
