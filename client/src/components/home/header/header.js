import React from 'react';
import {Paper,Grid,Typography, createGenerateClassName} from '@material-ui/core';
import useStyles from './style'

const Header = () => {
    const classes = useStyles();
    return(
        <Grid container maxWidth="sm">
            <Grid item sm={12}>
                <Paper className={classes.paper} elevation={3}>
                    <Typography variant='h4'>Meme-Banao</Typography>
                    <Typography className={classes.para} variant="body2">
                    <p>Wanna become a MEMELORD?<br/>
                    Start below with one of the the best and easiest way on earth!</p>
                    </Typography>
                </Paper>
            </Grid>
        </Grid>    
    );
}


export default Header;