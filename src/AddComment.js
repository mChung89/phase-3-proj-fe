import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import { useState } from 'react'

export default function AddComment({}) {
  const [toggleComment, setToggle] = useState(false)


  const handleClick = () => {
    setToggle(prev => !prev)
  };

  const leaveComment = (<Button onClick={handleClick}>Leave a comment</Button>)
  const commentFieldBox = (<TextField fullWidth>Hello</TextField>)

  return (
      <>
        {toggleComment ? commentFieldBox : leaveComment}
      </>
  )
}