import { TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <Typography>Hello</Typography>
        <TextField variant='filled'label='Username'/><br /><br />
        <button>Submit</button>
    </div>
  )
}

export default Login