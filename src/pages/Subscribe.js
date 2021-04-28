import React, { useState } from 'react';

import "./Subscribe.css";

import { Button } from "@material-ui/core";
import axios from 'axios';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import consts from '../consts.json'


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 'auto',
    marginTop: 21,
    textAlign: 'center',
    width: '84%'
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
}));

function Subscribe({ id, openDialog }) {
  const classes = useStyles()
  const [email, setEmail] = useState('')
  const [emailError, setError] = useState(false)

  const handleChange = (e) =>{
    setEmail(e.target.value)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setError(false)
  };
  
  
	const handleSubmit = async (e) => {
		e.preventDefault()
		

		if(!validateEmail()){
      console.log("email format error")
      setError(true)
			return
    }
    
    console.log("submit email")

		try {

      window.dataLayer.push({
        event: 'submit-event',
        eventProps: {
            category: "Category",
            action: "Action",
            label: "ordernow",
            value: "subscribe"
        }
      });

			await axios.post(
        consts['endpoints']['send-email'],
				{
					params: {
						email,
            subject: 'subscribe-update',
            template: 'emailTemplates'
					}
				}
			).then(res=>{
				if(res.data.status==="success"){
					openDialog({up :"Thank you for subscribing to our newsletter!", down: "We will get back to you soon- Stay Tuned!"})
				}else{
          openDialog({up :"Sorry! Unknown Error.", down: "You could not send your subscription."})
				}
			})

		} catch (error) {
			console.log(error)
		}
	};

	const validateEmail = () => {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return re.test(String(email).toLowerCase())
	};
  


  return (
    <div>
      <Snackbar open={emailError} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
        Please provide a valid email address.
        </Alert>
      </Snackbar>

      <div className="tour bg-blue" id={id}>
        <div className={classes.root}>
            <h2>
              Subscribe to our newsletter & get the latest news and updates
            </h2>
            <div className="email-box">
              <input type="text" placeholder="Enter your email" onChange={handleChange}>
              </input>
              <Button onClick={handleSubmit}>
                Subscribe
              </Button>
            </div>
          </div>
      </div>

      <div className="tour bg-white" id={id}>
        <div className={classes.root}>
        <h1>
        Our Happy Users
        </h1>
          
        <Grid container spacing={5} justify="space-between" style={{marginTop: 21}}>

          <Grid item xs={6} sm={3}>
            <img className="trusted-img" src={require('../Images/trusted-1.png')}/>
          </Grid> 

          <Grid item xs={6} sm={3}>
          <img className="trusted-img" src={require('../Images/trusted-2.png')}/>
          
          </Grid>
          <Grid item xs={6} sm={3}>
          <img className="trusted-img" src={require('../Images/trusted-3.png')}/>
          
          </Grid>
          <Grid item xs={6} sm={3}>
          <img className="trusted-img" src={require('../Images/trusted-4.png')}/>          
          </Grid>
          </Grid>
        
        </div>
      </div>
    
    </div>
    );
}

export default Subscribe;
