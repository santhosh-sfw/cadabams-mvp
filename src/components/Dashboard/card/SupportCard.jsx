import React from 'react'
import { Card } from '@mui/material'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
const SupportCard = () => {
  return (
    <Card style={{
      backgroundColor: "#bfddff",
      color: "#042447",
      borderRadius: '10px',
      padding: '10px',
      height: '100px',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center'


    }}>
      <div style={{
        fontSize: "1rem",
        fontWeight: 'bolder'
      }}>SupportCard</div>
      <CallOutlinedIcon style={{
        border: '1px solid #042447',
        padding: '10px',
        borderRadius: '10px'
      }} />
      <MessageOutlinedIcon style={{
        border: '1px solid #042447',
        padding: '10px',
        borderRadius: '10px'
      }} />
    </Card>
  )
}

export default SupportCard