import { Card, Typography } from '@mui/material'
import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
const UpcommingAppoinmentIndividual = () => {
    const json = [{
        id: "sscscc",
        doctor: "Dr.Justin",
        mode: "Online",
        date: "14 Nov 2022",
        from: "11:00",
        to: "14:00"
    }, {
        id: "sscscc",
        doctor: "Dr.Justin",
        mode: "Online",
        from: "11:00",
        date: "14 Nov 2022",
        to: "14:00"
    }, {
        id: "sscscc",
        doctor: "Dr.Justin",
        mode: "Online",
        from: "11:00",
        date: "14 Nov 2022",
        to: "14:00"
    }, {
        id: "sscscc",
        doctor: "Dr.Justin",
        mode: "Online",
        date: "14 Nov 2022",
        from: "11:00",
        to: "14:00"
    }]
    return (
        <Card style={{
            padding: "10px"
        }}>

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                color: "#5b98de",
                padding:'0 5px'

            }}>
                <Typography style={{
                    fontWeight: 'bold'
                }}>
                    Upcomming Appointment

                </Typography>
                <Typography>
                    <CalendarMonthIcon />
                </Typography>
            </div>
            <div style={{
                height: '200px', overflowY: "scroll",
                // justifyContent: 'center', flexDirection: 'column'
            }}>
                {json.map((data, i) => (
                    <Card key={i} style={{
                        // backgroundColor: '#c7c7c7',
                        height: '36%',
                        width: '80%',
                        padding: "10px",
                        margin: '5px 5%',
                        marginTop: '5px',
                        borderLeft: '5px solid #5b98de',
                        fontSize: '0.85rem'
                    }}>
                        <div style={{
                            fontWeight: 'bold'
                        }}>
                            Appointment With {data.doctor}
                        </div>
                        <div>
                            {data.mode}
                        </div>
                        <div>
                            {data.date} {data.from}-{data.to}
                        </div>
                    </Card>
                ))
                }
            </div>
        </Card>
    )
}

export default UpcommingAppoinmentIndividual