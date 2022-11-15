import { Grid, Typography, Card } from '@mui/material'
import React from 'react'
import moment from 'moment'

const AppoinmentCard = ({ upcomming }) => {
    console.log(upcomming)
    let dateformat = moment(upcomming?.start_date).format('MMMM DD yyyy')
    let dataformat1 = dateformat.split(" ")
    const setDay = (date) => {
        let day = moment(date).day();
        console.log(day, "day")

        switch (day) {
            case 0:
                return "Sunday";
                break;
            case 1:
                return "Monday";
                break;
            case 2:
                return "Tuesday";
                break;
            case 3:
                return "Wednesday";
                break;
            case 4:
                return "Thursday";
                break;
            case 5:
                return "Friday";
                break;
            case 6:
                return "saturday";
                break;
        }
    }
    const days = setDay(upcomming?.start_date);

    console.log(days, "format")
    const mon = dataformat1[0];
    const date = dataformat1[1];
    const year = dataformat1[2]
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
                            {date}
                        </Typography>
                        <Typography style={{
                            fontWeight: 'bold'
                        }}>
                            {mon},&nbsp;{year}
                        </Typography>

                        <Typography>
                            {days}
                        </Typography>
                    </div>
                    <div>
                        <Typography style={{
                            fontSize: "2rem", fontWeight: 'bold'
                        }} >{(upcomming?.start_time)?.substring(0, 5)}</Typography>
                        <Typography>
                          Appointment with {upcomming?.doctor_name}
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