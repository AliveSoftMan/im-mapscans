import React from "react";
import "./ProfessionalMarket.css";
import "./TourCard";
import Scroll, { ScrollLink } from 'react-scroll';


import { Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

var scroll = Scroll.animateScroll;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 'auto',
    paddingLeft: '8%',
    width: '92%'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 172,
    minWidth: 152,
    maxWidth: 182,
    margin: 'auto'
  }
}));

function Tour({ id }) {
  const classes = useStyles()

  return (
    <div className="pm_tour bg-white" id={id}>
      <div className={classes.root}>
        <Grid container spacing={0} justify="space-between">
          <Grid item xs={12} sm={5} className="grid-headercontent">
            <div className="tour__headerContent">
              <h1>Professional Marketing <br />  Content for your Listings  </h1>
              <p>
                Looking for Virtual Tours, Floor Plans, Video Tours or HDR Photos for your listing? MapScans provides exceptional marketing content for you, all in one place!
                  </p>
              <p>
                Get 20% off your first order!
                  </p>
              <Link
                to="pricing?scroll=bottom"
               >
                <Button>
                  ORDER NOW
                </Button>
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={7} className="img-div">
            <img style={{ width: '100%' }} src={require('../imgs/Hero Image 1.png')} />
          </Grid>
        </Grid>
      </div>
    </div>

  );
}

export default Tour;
