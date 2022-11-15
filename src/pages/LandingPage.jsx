import { styled } from '@mui/material/styles';
import { Container, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react';

import AppBars from '../components/Dashboard/AppBar/AppBar'
import AppoinmentCard from '../components/Dashboard/card/AppoinmentCard';
import StartAppoinmentCard from '../components/Dashboard/card/StartAppoinmentCard';
import ManageAppoimnet from '../components/Dashboard/card/ManageAppoimnet';
import ResourceCheckoutCard from '../components/Dashboard/card/ResourceCheckoutCard';
import VideoCarousal from '../components/Dashboard/Carousal/VideoCarousal';
import AddCarousal from '../components/Dashboard/Carousal/AddCarousal';
import TotalAppoinmentCard from '../components/Dashboard/card/TotalAppoinmentCard';
import SupportCard from '../components/Dashboard/card/SupportCard';
import UpcommingAppoinment from '../components/Dashboard/card/UpcommingAppoinment';
import QuoteCarousal from '../components/Dashboard/Carousal/QuoteCarousal';
import { useState } from 'react';
import axios from 'axios';
import { API } from '../constants/APICONFIG';


const LandingPage = () => {
    const [data, setData] = useState()
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    useEffect(() => {
        let output = getDashboardJson()
        setData(output)
    }, [])
    console.log(data, "data value666")
    const getDashboardJson = () => {
        axios({
            method: 'get',
            url: API.TEST,
            responseType: 'json'
        })
            .then(function (response) {
                console.log(response?.data, "res")
                setData(response?.data)
            }).catch((error) => {
                console.log(error)
            })
    }
    return (
        <>
            <AppBars />
            <Container fixed style={{
                paddingTop: "20px",
                backgroundColor: '#f8f8f8',
            }}>
                <Grid container spacing={2}>
                    <Grid container item xs={12} md={8} spacing={2}>
                        <Grid item xs={12} md={8}>
                            <AppoinmentCard upcomming={data?.next_appointment} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <StartAppoinmentCard />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <ManageAppoimnet />
                        </Grid> <Grid item xs={12} md={4}>
                            <ResourceCheckoutCard />
                        </Grid> <Grid item xs={12} md={4}>
                            <VideoCarousal />
                        </Grid>
                        <Grid item xs={12} md={8}>

                            <AddCarousal />                        </Grid>
                        <Grid item conatiner xs={12} md={4} spacing={2}>
                            <Grid item xs={12} md={12}>


                                <TotalAppoinmentCard count={data?.total_appointment_counts} />
                            </Grid>
                            <Grid item xs={12} md={12}>

                                <SupportCard />
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid container item xs={12} md={4} spacing={2}>
                        <Grid item xs={12} md={12}>
                            <UpcommingAppoinment list={data?.upcoming_appointments}  />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <QuoteCarousal />
                        </Grid>
                        {/* <Grid item xs={12} md={12}>
                            <Item>xs=4</Item>
                        </Grid> */}
                    </Grid>
                </Grid>

            </Container>
        </>
    )
}

export default LandingPage