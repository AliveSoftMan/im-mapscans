import React from "react";
import "./ScannerComp.css";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 1024,
    margin: 'auto',
    marginTop: 21,
    padding: '32px 0'
  },
  banner: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: '#1f0988'
  },
  bannerImg: {
    width: '100%'
  },
  paper: {
    padding: '16px 24px',
    textAlign: 'center',
    color: '#1f0988',
    height: 172,
    minWidth: 182,
    maxWidth:252,
    margin: 'auto',
    border: '2px solid #1f0988',
    borderRadius: 27,
    boxShadow: 'none'

  }
}))

function ScannerComp(id) {
  const classes = useStyles();
  return (
    <div className="scanner-comp">      
      <div className={classes.banner}>

        <img src={require('../imgs/Scanner Banner.png')} className={classes.bannerImg}/>
        <h1>More Shoots. More Freedom.</h1>
        <h3>
          Kick-start your career with MapScans. Be part of a dynamic,
          growth-oriented group of professionals. Hone your skills with us. We
          help you gain exposure by working with some of the top brands in the
          country. Have flexible schedules. Take on as many projects you can
          handle!
        </h3>     

      </div>

      <div className={classes.root}>       

        <Grid container spacing={2} justify="space-between">
          <Grid item xs={12} sm={4}>               
            <Paper className={`${classes.paper} tour-item`}>
              <p style={{fontSize: 21, marginTop: 18, fontWeight: 600}}>Have a chat</p>
              <p style={{fontSize: 14, marginTop: 36}}>
              We will provide you with everything you need to get started. Tell us about your portfolio and experience.
              </p>
            </Paper>
          </Grid> 
          <Grid item xs={12} sm={4}>               
            <Paper className={`${classes.paper} tour-item active-tour-item`}>
              <p style={{fontSize: 21, marginTop: 18, fontWeight: 600}}>Schedule</p>
              <p style={{fontSize: 14, marginTop: 36}}>
              We’ll give you a schedule based on current demand, and your preference.
              </p>
            </Paper>
          </Grid> 

          <Grid item xs={12} sm={4}>               
            <Paper className={`${classes.paper} tour-item`}>
              <p style={{fontSize: 21, marginTop: 18, fontWeight: 600}}>Get paid</p>
              <p style={{fontSize: 14, marginTop: 36}}>
              Submit your work and get paid.
              </p>
            </Paper>
          </Grid> 

        </Grid>  
      </div>

    </div>
  );
}

export default ScannerComp;
