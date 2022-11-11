import React from 'react';
import { Card } from '@mui/material'
import DuoIcon from '@mui/icons-material/Duo';
const StartAppoinmentCard = () => {
    return (
        <Card style={{
            backgroundColor: "#090a09",
            color: "#fff",
            borderRadius: '10px',
            padding: '10px',
            height: '150px',
            display: 'flex',
            alignItems: "center",
            fontSize: '1.5rem'


        }}>
            <DuoIcon style={{
                color: '#0060ff',
                fontSize: '3.5rem'

            }} />
            <div style={{
            }}>
                Start Appoimnment

            </div>
        </Card>

    )
}

export default StartAppoinmentCard