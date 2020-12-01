import React from "react";
import "./Feature.css";
import Card from "./Card";
import card1 from "../Images/card1.png";
import card2 from "../Images/card2.png";
import card3 from "../Images/card3.png";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 1175,
    margin: 'auto',
    marginTop: 21
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'white',
    height: 242,
    minWidth: 152,
    maxWidth: 230,
    margin: 'auto',
    backgroundColor: '#1f0988',
    border: '2px solid',
    borderRadius: 21,
    overflow: 'hidden'
  },
}))

function Feature(id) {
  const classes = useStyles();
  return (
    <div className="feature" id={id}>
      <div className="feature__header">
        <h1>What We Do For You</h1>
        <h3>
          Market your home in stunning details by showcasing them with Extraordinary Photos, <br/> 3D Tours, 3D Videos and Floor Plans.
        </h3>
     
      </div>
      <div className={classes.root}>
      <Grid container spacing={2} justify="space-between">
      
        <Grid item xs={12} sm={3}>
          <Paper className={`${classes.paper} tour-item`}>
            <img style={{height: 72, marginTop: 16}} src={require('../imgs/3d Tour.svg')}/>
            <p style={{fontSize: 21, marginTop: 10, fontWeight: 600}}>Virtual Tours</p>
            <p style={{fontSize: 14, marginTop: 6}}>
            Experience the home as if you were actually there with one of our stunning 3D Tours.
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={`${classes.paper} tour-item`}>
            <img style={{height: 72, marginTop: 16}} src={require('../imgs/Video Tour.svg')}/>
            <p style={{fontSize: 21, marginTop: 10, fontWeight: 600}}>Video Walkthrough</p>
            <p style={{fontSize: 14, marginTop: 6}}>
            Stunning, professional videos that capture a buyers’ attention as it navigates a buyer through the home.
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={`${classes.paper} tour-item`}>
            <img style={{height: 72, marginTop: 16}} src={require('../imgs/HDR Photo.svg')}/>
            <p style={{fontSize: 21, marginTop: 10, fontWeight: 600}}>HDR Photos</p>
            <p style={{fontSize: 14, marginTop: 6}}>
            Eye-catching photos captured in High definition. Make your listings stand out above the rest.
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={`${classes.paper} tour-item`}>
            <img style={{height: 72, marginTop: 16}} src={require('../imgs/3d Tour.svg')}/>
            <p style={{fontSize: 21, marginTop: 10, fontWeight: 600}}>Floor Plans</p>
            <p style={{fontSize: 14, marginTop: 6}}>
            Detailed, floor plans outlining dimensions and amenities help buyers understand the layout of a home.
            </p>
          </Paper>
        </Grid>

      </Grid>
    </div>
    </div>
  );
}

export default Feature;
