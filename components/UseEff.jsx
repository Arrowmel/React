import { Button, Typography } from '@mui/material'
import React,{useEffect, useState} from 'react'

const UseEff = () => {
    var[name,setName]=useState()

    const changeHome=()=>{
        setName("Home")
    }
    const changeContact=()=>{
        setName("Contact")
    }
    const changeGallery=()=>{
        setName("Gallery")
    }
    useEffect(()=>{
        changeHome()
    },[])   
  return (
    <div>
        <Typography>Welcome to {name}</Typography>
        <Button variant='contained'onClick={changeHome}>Home</Button>&nbsp;&nbsp;
        <Button variant='contained'onClick={changeContact}>Contact</Button>&nbsp;&nbsp;
        <Button variant='contained'onClick={changeGallery}>Gallery</Button>&nbsp;&nbsp;
    </div>
  )
}

export default UseEff