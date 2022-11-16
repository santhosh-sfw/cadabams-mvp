import { Grid, Typography, Card } from '@mui/material'
import React from 'react'
import moment from 'moment'

const AppoinmentCard = ({ upcomming }) => {
    console.log(upcomming)
    let dateformat1 = new Date(upcomming?.start_date)
    dateformat1.setHours(dateformat1.getHours() + 5)
    dateformat1.setMinutes(dateformat1.getMinutes() + 30)
    let dateformat = moment(dateformat1).format('MMMM DD yyyy')
    let dataformat11 = dateformat.split(" ")
    const setDay = (date) => {
        let day = moment(date).day();
        console.log(dataformat11, "day")

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
    const mon = dataformat11[0];
    const date = dataformat11[1];
    const year = dataformat11[2]
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
                        }} >
                            {moment(dateformat1).format("HH:mm")}</Typography>
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