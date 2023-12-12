import { Button, Typography } from '@mui/material'
import React,{useState} from 'react'

const Counter = () => {
    var [count, setCount] = useState(0)
const increse=()=>{
    setCount(count+1)
}
const decrese=()=>{
    if(count>0){
        setCount(count-1)
    }
}
  return (
    <div>
        <Typography>Count:{count}</Typography>
        <Button variant='contained'color='success'onClick={increse}>+</Button>&nbsp;&nbsp;
        <Button variant='contained'color='error'onClick={decrese}>-</Button>
    </div>
  )
}

export default Counter