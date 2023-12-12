import { TextField, Typography,Button } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
        <Typography variant='h4'>SignUp</Typography><br />
        <TextField variant='filled'label='Username'/><br /><br />
        <TextField variant='filled'label='Place'/><br /><br />
        <TextField variant='filled'label='Age'/><br /><br />
        <TextField variant='filled'label='Gender'/><br /><br />
        <TextField variant='filled'label='Email'/><br /><br />
        <TextField variant='filled'label='Password'/><br /><br />
        <Button variant='contained'>Submit</Button>
    </div>
  )
}

export default Signup