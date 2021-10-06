import React from 'react';
import useStyles from './style';
import {Card,Typography,CardMedia} from '@material-ui/core';
import homepageimage from '../../../images/backgroung.jpg'


const ImageHolder = () => {
    const classes = useStyles();
    return(
        <Card className={classes.card}  >
            <Typography className={classes.title} variant="h6">Surfing and CHILL!</Typography>
            <CardMedia  className={classes.media} image={homepageimage} title="HomePage"></CardMedia>
        </Card>
    );
}

export default ImageHolder;