var nodemailer = require('nodemailer');

module.exports = async (req, callback)=>{

    // const smtpConnectionString = {
    //   service: 'outlook',
    //   host: 'smtp.office365.com',
    //   port: '587',
    //   auth: { user: 'hello@podparkvr.com', pass: 'Podpark1!' },
    //   secureConnection: false,
    //   tls: { ciphers: 'SSLv3' }
    // }

    const smtpConnectionString = {
        host: 'smtp.zoho.com',
        port: 465,
        secure: true, //ssl
        auth: {
                user:'andrew@mapscans.com',
                pass:'andrewmapscans123'
        }
      }

    var transporter = nodemailer.createTransport(smtpConnectionString)
    let return_text = {"status": "success"}
    console.log("mail data : ", req)

    var MAILBODY ='\n[suject]:\n'+req.subject+'\n\n[msg]:\n'+req.content;

    try{
        await transporter.sendMail({
            from: "andrew@mapscans.com",
            to: [req.to],
            subject: req.subject,
            html: req.content
        });
    }catch(e){
        console.log("error :", e)
        return_text.status = "failed"
    }
    callback(return_text)
    
};