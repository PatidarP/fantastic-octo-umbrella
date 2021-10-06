import React from 'react';
import useStyles from './style';
import {Card, Typography, Button, TextField, Container, Grid} from '@material-ui/core';
import homepageimage from '../../../images/backgroung.jpg'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const ImageEditor = () => {
    const classes = useStyles();
    return(
        <>
        <Card className={classes.card}  >
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="secondary" component="span" fullWidth startIcon={<CloudUploadIcon style={{ fontSize: 70, margin:60 }} />} >
                        <Typography className={classes.newtempbtn}>Upload New Template</Typography>
                    </Button>
                </label>
            <TextField
                className={classes.textf}
                name='message'
                variant='outlined'
                label='Add Text at the top of the image'
                fullWidth
                />
        </Card>
        <br/>
        <Container >
            <Button className={classes.submitButton} variant="contained" size="large" color="primary" >
                <Typography className={classes.submitButton}>G0!</Typography>
            </Button>
            <IconButton aria-label="delete"  size="large">
                <DeleteIcon style={{ fontSize: 70, margin:60 }}/>
            </IconButton>
            {/* <Grid container className={classes.container} >
                <Grid xs={12} sm={6}>
                    <Button className={classes.submitButton} variant="contained" color="primary"  >
                        <Typography>GO!</Typography>
                    </Button>
                </Grid>
                <Grid xs={12} sm={6}>
                    <Button className={classes.resetButton} variant="contained" color="secondary"  >
                        <Typography>Reset</Typography>
                    </Button>
                </Grid>
            </Grid> */}
        </Container>
        </>

    );
}

export default ImageEditor;