import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';
import { db } from '../firebase';
import firebase from 'firebase';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const Contact = (id) => {
	
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			name,
			email,
			phone,
			address,
			message,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		};
		db.collection('customerLeads')
			.add(data)
			.then(() => {
				setName('');
				setEmail('');
				setPhone('');
				setAddress('');
				setMessage('');
				alert(
					'Thank you for your interest. Our team will get in touch with you soon. We look forward to making great things together! 🚀'
				);
			})
			.catch((error) => {
				alert(error.message);
			});
		try {
			await axios.get(
				'http://localhost:5001/mapscans-react/us-central1/sendEmail',
				{
					params: {
						email,
						phone,
						name,
						address,
						message,
						template: 'customerSignUpTemplate',
					},
				}
			);
		} catch (error) {
			console.log(error);
		}
	};

	const validateEmail = () => {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	};

	const validatePhone = () => {
		var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
		return phoneNumberPattern.test(phone);
	};

	return (
		<div className="contact" id={id}>
			<div className="contact__form">
				<form onSubmit={handleSubmit}>
					<h1>Get in touch with us</h1>

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
							error={!validateEmail()}
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
							error={!validatePhone()}
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
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<Button
							variant="contained"
							type="submit"
							style={{ width: 170, padding: 2 }}
							disabled={!name || !email || !phone || !message}
						>
							Submit
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
