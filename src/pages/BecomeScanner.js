import React, {useState} from "react";
import "./BecomeScanner.css";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { db } from '../firebase';
import firebase from 'firebase';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

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

function Process(props) {
  	const classes = useStyles()
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [address, setAddress] = useState('')
	const [message, setMessage] = useState('')
	const [firstInput, setFirstInput] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault()
		
		setFirstInput(true)

		if(!validateEmail() || !validatePhone() ){
			return
		}

		try {
			await axios.post(
				// 'http://localhost:8080/mapscans-react/us-central1/sendEmail',
				'http://localhost:8080/email-send',
				{
					params: {
						email,
						phone,
						name,
						address,
						message,
						template: 'customerSignUpTemplate',
						subject: 'become-scanner'
					}
				}
			).then(res=>{
				console.log("email send : ", res)
				if(res.data.status=="success"){
					props.openDialog({up :"Thank you for your interest in becoming a scanner!", down: "We will get back to you soon- Stay Tuned!"})
				}else{
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

	const validatePhone = () => {
		var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
		return phoneNumberPattern.test(phone)
  }  

  return (
    <div className="getintouch" id={props.id}>   
		<div className="process__card">
        <Grid container spacing={0} justify="space-between">       
          <Grid item xs={12} sm={7} className="card-items">
            <div className="contact__form">
				<form onSubmit={handleSubmit}>					
					<h1>Become a Scanner</h1>
					<div className="contact__formField">
						<TextField
							className="contact__textField"
							variant="outlined"
							label="Name"
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<TextField
							className="contact__textField"
							variant="outlined"
							label="Email"
							required
							value={email}
							error={!validateEmail() && firstInput}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="contact__formField">
						<TextField
							className="contact__textField"
							variant="outlined"
							label="Phone number"
							required
							value={phone}
							error={!validatePhone() && firstInput}
							onChange={(e) => setPhone(e.target.value)}
						/>
						<TextField
							className="contact__textField"
							variant="outlined"
							label="Address"
							required
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
					</div>
					<div className="contact__inputField">
						<TextField
							className="contact__inputFieldMessage"
							variant="outlined"
							multiline
							rows="4"
							label="Enter your message"
							required
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
					</div>
					<div
						className="contact__button"
						style={{
							display: 'flex'
						}}
					>
						<Button
							variant="contained"
							type="submit"
							style={{padding: '3px 36px', borderRadius: 8 }}
							// disabled={!name || !email || !phone || !message}
						>
							SIGN UP
						</Button>
					</div>
				</form>
			</div>           
          </Grid>         
          <Grid item xs={12} sm={5} style={{display: 'flex', alignItems: 'flex-end'}}>
          <img style={{width: '100%'}} src={require('../imgs/Get in Touch.png')}/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Process;
