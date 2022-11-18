import React from 'react'
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import { Card } from '@mui/material'
const ManageAppoimnet = () => {
  return (
    <Card style={{
      backgroundColor: "#bfddff",
      color: "#042447",
      borderRadius: '10px',
      padding: '10px',
      height: '120px'
    }}>
      <div style={{
        width: "90%",
        fontSize: "1.5rem",
        paddingBottom: '10px'
      }}>Manage Appointment

      </div>
      <div>
        <ArrowOutwardOutlinedIcon style={{
          border: '1px solid #042447',
          borderRadius: '10px',
          padding: "10px"
        }} />

      </div>
    </Card>
  )
}

export default ManageAppoimnet