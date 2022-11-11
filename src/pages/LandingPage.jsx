import { styled } from '@mui/material/styles';
import { Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react';

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

const LandingPage = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <>
            <AppBars />
            <Container fixed style={{
                paddingTop: "20px",
                backgroundColor: '#f8f8f8',
            }}>
                <Grid container spacing={2}>
                    <Grid container item xs={6} md={8} spacing={2}>
                        <Grid item xs={6} md={8}>
                            <AppoinmentCard />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <StartAppoinmentCard />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <ManageAppoimnet />
                        </Grid> <Grid item xs={6} md={4}>
                            <ResourceCheckoutCard />
                        </Grid> <Grid item xs={6} md={4}>
                            <VideoCarousal />
                        </Grid>
                        <Grid item xs={6} md={8}>

                            <AddCarousal />                        </Grid>
                        <Grid item conatiner xs={6} md={4} spacing={2}>
                            <Grid item xs={12} md={12}>


                                <TotalAppoinmentCard />
                            </Grid>
                            <Grid item xs={12} md={12}>

                                <SupportCard />
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid container item xs={4} spacing={2}>
                        <Grid item xs={12} md={12}>
                            <UpcommingAppoinment />
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