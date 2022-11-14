import { Grid, Typography, Card } from '@mui/material'
import React from 'react'

const AppoinmentCard = () => {
    return (
        <Card style={{
            backgroundColor: "#bfddff",
            color: "#042447",
            borderRadius: '10px',
            padding: '10px',
            height: '150px'

        }}>
            <Grid container item xs={12} md={12}>
                <div>
                    <Typography style={{
                        fontWeight: 'bold'
                    }}>
                        Next Appointment
                    </Typography>
                </div>
                <Grid item xs={12} sm={12} md={12} lg={12} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div>
                        <Typography style={{
                            fontSize: "2rem", fontWeight: 'bold'
                        }} >
                            22 
                        </Typography>
                        <Typography style={{
                            fontWeight: 'bold'
                        }}>
                            August ,2022
                        </Typography>

                        <Typography>
                            Thursday
                        </Typography>
                    </div>
                    <div>
                        <Typography style={{
                            fontSize: "2rem", fontWeight: 'bold'
                        }} >16:30</Typography>
                        <Typography>
                            with Dr.xyz Placeholder
                        </Typography>
                        <Typography style={{
                            fontWeight: 'bold'
                        }}>
                            Online                                    </Typography>
                    </div>
                </Grid>

            </Grid>
        </Card>
    )
}

export default AppoinmentCard