import React from 'react';
import { Redirect } from 'react-router-dom';


import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import instaIcon from '../assets/instaIcon.png'
import Border from '../assets/border.png'

const useStyles = makeStyles(theme => ({
    card: {

        boxShadow: '1px 2px 10px black',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',

    },
    cardMediaDiv: {
        height: '350px',
        margin: 0,
        paddingBottom: 0,
        backgroundImage: `url(${Border}), url(https://source.unsplash.com/random)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    btnsActions: {
        display: 'flex',
        justifyContent: 'center',
    },

    info: {
        flex: 1,
        alignSelf: 'center',
        height: '100%',
        paddingLeft: 9,
    },
    iconInsta:{
        flex: 1,
        height: '100%',
    },
    btnImage: {
        height: 50,
        width: 50,
        backgroundImage: `url(${instaIcon})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',

    }
}));

export default function Album({ card }) {
    const classes = useStyles();

    // Route guard
    if (!localStorage.getItem('uid')) return <Redirect to="/login" />

    return (
        <Grid item xs={12} sm={6} md={6}>
            <Card className={classes.card}>
                <div
                    className={classes.cardMediaDiv}
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Event Title
                    </Typography>
                    <Typography>
                        Event Date
                    </Typography>
                </CardContent>
                <CardActions className={classes.btnsActions}>
                    <Typography 
                        className={classes.info}>
                        More informations about the event.
                    </Typography>
                    <Button size="small"
                        color="primary"
                        className={classes.iconInsta}>
                        <Grid className={classes.btnImage}/>
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}