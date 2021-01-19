import React, { useState } from 'react';
import './ScannerForm.css';
import axios from 'axios';
import { db } from '../firebase';
import firebase from 'firebase';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const ScannerForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			name,
			email,
			phone,
			address,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		};
		db.collection('scannerRequests')
			.add(data)
			.then(() => {
				setName('');
				setEmail('');
				setPhone('');
				setAddress('');
				alert(
					'Thank you for your interest. Our team will get in touch with you soon. We look forward to making great things together! 🚀'
				);
			})
			.catch((error) => {
				alert(error.message);
			});
		try {
			await axios.get(
				// 'http://localhost:5001/mapscans-react/us-central1/sendEmail',
				consts['endpoints']['send-email'],
				{
					params: {
						email,
						phone,
						name,
						address,
						template: 'scannerSignUpTemplate',
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
		<div className="scannerform">
			<div className="scannerform__form">
				<form onSubmit={handleSubmit}>
					<div className="scannerform__formField">
						<TextField
							className="scannerform__textField"
							variant="outlined"
							label="Name"
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<TextField
							className="scannerform__textField"
							variant="outlined"
							label="Email"
							required
							value={email}
							error={!validateEmail()}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="scannerform__formField">
						<TextField
							className="scannerform__textField"
							variant="outlined"
							label="Phone number"
							required
							value={phone}
							error={!validatePhone()}
							onChange={(e) => setPhone(e.target.value)}
						/>
						<TextField
							className="scannerform__textField"
							variant="outlined"
							label="Address"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
					</div>
					<div className="scannerform__inputField">
						<Button
							variant="contained"
							type="submit"
							disabled={!name || !email || !phone || !address}
						>
							Sign up
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ScannerForm;
