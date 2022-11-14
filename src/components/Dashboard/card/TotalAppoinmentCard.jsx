import React from 'react'
import { Card } from '@mui/material'
const TotalAppoinmentCard = () => {
  return (
    <Card style={{
      backgroundColor: "#fcf4f0",
      color: "#042447",
      borderRadius: '10px',
      padding: '10px',
      height: '150px',
      marginBottom: '20px'

    }}>
      <div style={{
        width: "90%",
        fontSize: "1.5rem",
        paddingBottom: '10px',
      }}>Total Appoinment Completed
      </div>
      <div style={{
        fontSize: '2.25rem',
        fontWeight: 'bold'
      }}>420</div>
    </Card>
  )
}

export default TotalAppoinmentCard