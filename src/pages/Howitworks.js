import React from "react";
import "./Howitworks.css";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 1250,
    margin: 'auto',
    marginTop: 21
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#1f0988',
    height: 264,
    minWidth: 182,
    maxWidth:234,
    margin: 'auto',
    border: '2px solid #1f0988',
    borderRadius: 12,
    boxShadow: 'none'

  },
}))

function Process(id) {
  const classes = useStyles();

  return (
    <div className="howitowrks" id="how-it-work">
     
      <div className="process__card">

        <Grid container spacing={0} justify="space-between">

          <Grid item xs={12} sm={4} style={{display: 'flex'}}>
          <img style={{width: '100%'}} src={require('../imgs/how-it-works.jpg')}/>
          </Grid>

          <Grid item xs={12} sm={8} className="card-items">
            <h1>How It Works</h1>
            <Grid container spacing={2} justify="space-between">

              <Grid item xs={12} sm={4}>               
                <Paper className={`${classes.paper} tour-item`}>
                  <p style={{fontSize: 21, marginTop: 54, fontWeight: 600}}>Place your order</p>
                  <p style={{fontSize: 14, marginTop: 36}}>
                  Send us an email to place your first order. Let us know what your schedule looks like.
                  </p>
                </Paper>
              </Grid> 
              <Grid item xs={12} sm={4}>               
                <Paper className={`${classes.paper} tour-item active-tour-item`}>
                  <p style={{fontSize: 21, marginTop: 32, fontWeight: 600}}>Our scanners work their magic</p>
                  <p style={{fontSize: 14, marginTop: 36}}>
                    Our professional will arrive at your property according to your schedule. 
                    Typically, our professionals will be in and out of the property in less than an hour.
                  </p>
                </Paper>
              </Grid> 

              <Grid item xs={12} sm={4}>               
                <Paper className={`${classes.paper} tour-item`}>
                  <p style={{fontSize: 21, marginTop: 54, fontWeight: 600}}>We deliver</p>
                  <p style={{fontSize: 14, marginTop: 36}}>
                    We process the spins using state-of-the-art InsideMaps Technology. Your content will be ready in 24 hours.
                  </p>
                </Paper>
              </Grid> 
            </Grid>                  
          </Grid> 
        </Grid>    
             
      </div>
    </div>
  );
}

export default Process;
