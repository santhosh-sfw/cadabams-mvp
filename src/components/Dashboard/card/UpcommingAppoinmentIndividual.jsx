import { Card, Typography } from '@mui/material'
import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import moment from 'moment/moment';
const UpcommingAppoinmentIndividual = ({ list }) => {

    return (
        <Card style={{
            padding: "5px"
        }}>

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                color: "#5b98de",
                padding: '0 5px'

            }}>
                <Typography style={{
                    fontWeight: 'bold'
                }}>
                    Upcoming Appointment

                </Typography>
                <Typography>
                    <CalendarMonthIcon />
                </Typography>
            </div>
            <div style={{
                height: '200px', overflowY: "scroll",
                // justifyContent: 'center', flexDirection: 'column'
            }}>
                {list ? list?.map((data, i) => (
                    <Card key={i} style={{
                        // backgroundColor: '#c7c7c7',
                        height: '36%',
                        width: '80%',
                        padding: "10px",
                        margin: '5px 5%',
                        borderLeft: '5px solid #5b98de',
                        fontSize: '0.85rem'
                    }}>
                        <div style={{
                            fontWeight: 'bold'
                        }}>
                            Appointment With {data?.doctor_name}
                        </div>
                        <div>
                            Online
                        </div>
                        <div>
                            {moment(data?.start_date).format('DD MMM YYYY') } { moment(`${data?.start_date} ${data?.start_time}`).format('HH:MM')} - {moment(`${data?.end_date} ${data?.end_time}`).format('HH:MM')}
                        </div>
                    </Card>
                )) : <Card key="i" style={{
                    // backgroundColor: '#c7c7c7',
                    height: '36%',
                    width: '80%',
                    padding: "10px",
                    margin: '5px 5%',
                    borderLeft: '5px solid #5b98de',
                    fontSize: '0.85rem'
                }}>
                    <div style={{
                        fontWeight: 'bold'
                    }}>
                        No Appointment found
                    </div>
                </Card>
                }
            </div>
        </Card>
    )
}

export default UpcommingAppoinmentIndividual