/* eslint-disable no-throw-literal */
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
admin.initializeApp();

let transporter = nodemailer.createTransport({
	pool: true,
	host: 'smtp.zoho.com',
	port: 465,
	secure: true,
	auth: {
		user: 'andrew@mapscans.com',
		pass: 'andrewmapscans123',
	},
	tls: {
		rejectUnauthorized: false,
	},
});

const from = 'Mapscans <support@mapscans.com>';

const customerSignUpTemplate = ({ email, name }) => {
	if (!email || !name) {
		throw 'Invoked with invalid params';
	} else {
		return [
			{
				from: from,
				to: email,
				subject: 'Thank you for your interest in MapScans!',
				html: `<p>Hi ${name},</p>
				<br />
				<p>Thank you for visiting our website and showing interest in our service.</p>
				<br />
				<p>MapScans provides comprehensive 3D Virtual Tours and High-definition imagery solutions for your listings. We enable real estate agents and property managers to showcase their properties through the most effective means possible.</p>
				<br />
				<p>For an unbeatable $99, we’ll provide you with a broad range of scanning services. You get immersive 3D virtual tours, stunning HDR photographs and detailed floor plans.</p>
				<br />
				<p>This is how the process looks like from start to finish:</p>
				<br />
				<ol>
					<li>Our team of dedicated scanners will visit your property and scan them.</li>
					<li>After scanning is complete, our team of skilled professionals work their magic.</li>
					<li>In 24 hours, you’ll have everything ready for your use!</li>
				</ol>
				<br />
				<p>What’s exciting is that you have full rights to place our contents on your website, listing sites, and anywhere you want to.</p>
				<br />
				<p>With our compelling offer and excellent service, we aim to look out for your best interests and cater to them now and in the foreseeable future. Feel free to contact us. We look forward to addressing your interests and fostering a long term business relationship with you.</p>
				<br />
				<p>Best Regards,</p>
				<p>The MapScans Team</p>`,
			},
			'newCustomerMessage',
		];
	}
};

const scannerSignUpTemplate = ({ email }) => {
	if (!email) {
		throw 'Invoked with invalid params';
	} else {
		return [
			{
				from,
				to: email,
				subject: 'Welcome to MapScans',
				html: `<p>Thank you for choosing MapScans!</p>
				<br />
				<p>We have received your application to be part of MapScans. We will get back to you after processing your application.</p>
				<br />
				<p>Best of luck!</p>
				<br />
				<p>Best regards,</p>
				<p>The MapScans Team</p>`,
			},
			'newScannerMessage',
		];
	}
};

const newCustomerMessage = ({ email, name, phone, address, message }) => {
	if (!email || !name || !phone || !address || !message) {
		throw 'Invoked with invalid params';
	} else {
		return {
			from: from,
			to: from,
			subject: `New Message From Customer - ${name}`,
			html: `<p>${name} has sent a direct message to Mapsacans!</p>
				<br />
				<pre>"${message}"</pre>
				<br />
				<p>Customer Information:</p>
				<br />
				<table>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Address</th>
					</tr>
					<tr>
						<td>${name}</td>
						<td>${email}</td>
						<td>${phone}</td>
						<td>${address}</td>
					</tr>
				</table>`,
		};
	}
};

const newScannerMessage = ({ email, name, phone, address }) => {
	if (!email || !name || !phone || !address) {
		throw 'Invoked with invalid params';
	} else {
		return {
			from: from,
			to: from,
			subject: `${name} - Enrolls as a scanner`,
			html: `<p>${name} wants to enroll as a scanner Mapsacans!</p>
				<br />
				<p>Customer Information:</p>
				<br />
				<table>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Address</th>
					</tr>
					<tr>
						<td>${name}</td>
						<td>${email}</td>
						<td>${phone}</td>
						<td>${address}</td>
					</tr>
				</table>`,
		};
	}
};

const templates = {
	customerSignUpTemplate,
	scannerSignUpTemplate,
	newCustomerMessage,
	newScannerMessage,
};

exports.sendEmail = functions.https.onRequest((req, res) => {
	cors(req, res, () => {
		const { email, template, ...rest } = req.query;
		if (!templates[template]) {
			return res
				.json({ error: 'Invoked with unknown template!' })
				.status(422);
		} else {
			try {
				const [mailOptions, callbackTemplate] = templates[template]({
					email,
					...rest,
				});
				return transporter.sendMail(mailOptions, (error, info) => {
					if (error) {
						return res.json({ error }).status(422);
					}
					if (callbackTemplate) {
						const callbackOptions = templates[callbackTemplate]({
							email,
							...rest,
						});
						return transporter.sendMail(
							callbackOptions,
							(error, info) => {
								if (error) {
									return res.json({ error }).status(422);
								}
								return res.json({ success: true });
							}
						);
					} else {
						return res.json({ success: true });
					}
				});
			} catch (error) {
				return res.json({ error }).status(422);
			}
		}
	});
});
