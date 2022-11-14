import React from 'react'
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import { Card } from '@mui/material';
const ResourceCheckoutCard = () => {
  return (
    <Card style={{
      backgroundColor: "#f59999",
      color: "#223351",
      borderRadius: '10px',
      padding: '10px',
      height: '120px'
    }}>
      <div style={{
        width:"90%",
        fontSize:"1.5rem",
        paddingBottom:'10px'
      }}>Check out Our Resources
      </div>
      <div>
        <AutoStoriesOutlinedIcon style={{
          border: '1px solid #223351',
          borderRadius: '10px',
          padding:'10px'
        }} />

      </div>
    </Card>

  )
}

export default ResourceCheckoutCard