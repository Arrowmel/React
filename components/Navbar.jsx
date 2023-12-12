import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography>My App</Typography>&nbsp;
                <Button variant='outlined'color='warning'>Home</Button>&nbsp;
                <Button variant='outlined'color='error'>Login</Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar