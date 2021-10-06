import React from 'react';
import { Grid,Container } from '@material-ui/core';
import homepageimage from '../../images/backgroung.jpg';
import useStyles from './style'
import Header from './header/header'

import ImageHolder from './imageHolder/imageHolder'
import ImageEditor from './imageEditor/imageEditor';

const Home = () => {
    const classes = useStyles(); 
    return(
        <>
        <Header />
        <Container>
            <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
                <Grid xs={12} sm={6}>
                    <ImageHolder />
                </Grid>
                <Grid xs={12} sm={6} >
                    <ImageEditor />
                </Grid>
            </Grid>
        </Container>
        </>
    );
}


export default Home;
