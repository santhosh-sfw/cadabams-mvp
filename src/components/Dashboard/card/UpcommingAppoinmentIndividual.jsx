import { Card, Typography } from '@mui/material'
import React, { useState } from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import moment from 'moment/moment';

const UpcommingAppoinmentIndividual = ({ list }) => {
    const [records, setRecords] = useState();
    const json = {
        upcoming_appointments: [
            {
                end_date: "2022-11-17 06:25:04",
                start_date: "2022-11-17 06:24:59",
                doctor_name: "Dr. RENU ELIZABATH"
            },
            {
                end_date: "2022-11-18 06:30:00",
                start_date: "2022-11-18 05:30:00",
                doctor_name: "Ms Shabdita Ritu Sarmah"
            }
        ],
        total_appointment_counts: 7,
        next_appointment: {
            end_date: "2022-11-17 06:25:04",
            start_date: "2022-11-17 06:24:59",
            doctor_name: "Dr. RENU ELIZABATH"
        }
    }

    let list2 = []
    let list1 = list?.map((data) => {
        let startDate = new Date(data.start_date)
        startDate.setHours(startDate.getHours() + 5)
        startDate.setMinutes(startDate.getMinutes() + 30)
        let endDate = new Date(data.end_date)
        endDate.setHours(endDate.getHours() + 5)
        endDate.setMinutes(endDate.getMinutes() + 30)
        let startTime = moment(startDate).format("HH:mm");
        let endTime = moment(endDate).format("HH:mm");
        let startTimeF = moment(startDate).format("DD MMM YYYY")
        let endTimeF = moment(endDate).format("DD MMM YYYY")

        let output = {
            doctorName: data.doctor_name, startTime: startTime, endTime: endTime, startDate: startTimeF, endDate: endTimeF
        }
        return output
        // list2.push(output)
    })
    console.log(list1,"list1")

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
                height: '170px', overflowY: "scroll",
                // justifyContent: 'center', flexDirection: 'column'
            }}>
                {list1 ? list1?.map((data, i) => (
                    <Card key={i} style={{
                        // backgroundColor: '#c7c7c7',
                        height: '34%',
                        width: '80%',
                        padding: "10px",
                        margin: '5px 5%',
                        borderLeft: '5px solid #5b98de',
                        fontSize: '0.85rem'
                    }}>
                        <div style={{
                            fontWeight: 'bold'
                        }}>
                            Appointment With {data?.doctorName}
                        </div>
                        <div>
                            Online
                        </div>
                        <div>
                            {data.startDate === data.endDate ?
                                `${data.startDate} ${data.startTime}-${data.endTime} `
                                :
                                `${data.startDate} ${data.startTime}-${data.startDate} ${data.endTime} `
                            }
                        </div>
                    </Card>
                )) : <Card key="i" style={{
                    // backgroundColor: '#c7c7c7',
                    height: '34%',
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