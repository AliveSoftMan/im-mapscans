import React from "react";
import "./Process.css";
import ProcessCard from "./ProcessCard";

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
    color: theme.palette.text.secondary,
    height: 172,
    minWidth: 152,
    maxWidth:182,
    margin: 'auto'
  },
}))

function Process(id) {
  return (
    <div className="process" id={id}>
      <h1>How it works</h1>
      <div className="process__card">

      <Grid container spacing={5} justify="space-between">

            <Grid item xs={12} sm={4}>
                <ProcessCard
                  number="1"
                  title="Place your Order"
                  description="Call us or Shoot an email to place your first order. Let us know what your schedule looks like."
                />
            </Grid> 

            <Grid item xs={12} sm={4}>
              <ProcessCard
                number="2"
                title="Our scanners work their magic"
                description="Our professional will arrive at your property according to your schedule. Typically, our professionals will be in and out of the property in less than an hour."
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <ProcessCard
                number="3"
                title="We deliver"
                description="We process the spins using state-of-the-art InsideMaps Technology. Your content will be ready in 24 hours."
              />
            </Grid>
          </Grid>    
             
      </div>
    </div>
  );
}

export default Process;
