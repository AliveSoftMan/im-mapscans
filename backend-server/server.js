var express = require('express')
var path = require('path')
const serveIndex = require('serve-index')
var session = require('express-session')
var auth = require('./middleware/auth')
var adminAuth = require('./middleware/adminAuth')
var mailService = require('./middleware/mailService')
const jwt = require('jsonwebtoken')
var bodyParser = require('body-parser')
const jwt_secret = "webvr"
var extract = require('extract-zip')
var cors = require('cors')
const axios = require('axios')
const fs = require('fs-extra')
const multer = require('multer')
const request = require('request')
var app = express()
const fileUpload = require('express-fileupload')
const capchaUrl = 'https://www.google.com/recaptcha/api/siteverify'
const capchaSecret = '6LcAN9kZAAAAALzGouVb-hOizb51yHvmGLAVPs-5'
const router = express.Router()
const  {sendEmail}= require('./function.js')


app.use(fileUpload({
        limits: {
            fileSize: 100000000 //1mb
        },
            abortOnLimit: true
    }
));


app.use(session({secret:'passsecret', cookie: { maxAge: 3600000 * 24 }}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(router)

app.get('/', (req, res, next)=>{
    if(req.session.login=='success')
        res.redirect('/main')
    next()
})

app.use('/',(req, res, next)=>{
    next()
}, express.static('../build'))

app.use('/pricing',(req, res, next)=>{
    next()
}, express.static('../build'))

app.use('/scanner',(req, res, next)=>{
    next()
}, express.static('../build'))

app.use('/videotour',(req, res, next)=>{
    next()
}, express.static('../build'))
app.use('/3dtour',(req, res, next)=>{
    next()
}, express.static('../build'))

app.use('/terms&conditions',(req, res, next)=>{
    next()
}, express.static('../build'))

app.use('/privacypolicy',(req, res, next)=>{
    next()
}, express.static('../build'))







// app.use('/login',  (req, res)=>{
//     res.sendFile(path.join(__dirname , '/public/index.html'))
// })


// app.use('/register', (req, res)=>{
//     res.sendFile(path.join(__dirname , '/public/register.html'))
// })

// app.use('/main', auth,  (req, res)=>{
//     res.sendFile(path.join(__dirname , '/public/main.html'))
// })

// app.use('/logout', (req, res)=>{
//     req.session.destroy()
//     res.redirect('/login')
// })

app.use('/email-send', async (req, res)=>{
    console.log("request : ", req.body)
    let resData = {
        status: "success",
        data: req.body,
        sent: {}
    }
    let reqParams = req.body.params
    let content = ""
    let subject = ""

    if(reqParams.subject == 'order-now' || reqParams.subject == 'get-in-touch'){
        subject = `${reqParams.name} has sent a direct message to Mapscans!`
        
        content = `<div>
            <p>
                ${reqParams.message}        
            </p>

            <h5>
                Customer Information
            </h5>
            
            <table>
                <tbody>
                    <tr>
                        <td  align="center">Name</td>
                        <td  align="center">Email</td>
                        <td  align="center">Phone</td>
                        <td  align="center">Address</td>
                    </tr>

                    <tr>
                        <td  align="center">${reqParams.name}</td>
                        <td  align="center">${reqParams.email}</td>
                        <td  align="center">${reqParams.phone}</td>
                        <td  align="center">${reqParams.address}</td>
                    </tr>
                </tbody>
            </table>
        </div>`

    }else if(reqParams.subject == 'become-scanner'){
        subject = `${reqParams.name} wants to enroll as a scanner Mapscans!`
        
        content = `<div>
            <p>
                ${reqParams.message}        
            </p>

            <h5>
                Customer Information
            </h5>
            
            <table>
                <tbody>
                    <tr>
                        <td  align="center">Name</td>
                        <td  align="center">Email</td>
                        <td  align="center">Phone</td>
                        <td  align="center">Address</td>
                    </tr>

                    <tr>
                        <td  align="center">${reqParams.name}</td>
                        <td  align="center">${reqParams.email}</td>
                        <td  align="center">${reqParams.phone}</td>
                        <td  align="center">${reqParams.address}</td>
                    </tr>
                </tbody>
            </table>
        </div>`
    }else if(reqParams.subject == "subscribe-update"){
        subject = `${reqParams.email} has subscribed to updates.`
        content = `<h4>${subject}</h4>`
    }

    // let mailInfo = `<div><h4>User Email: ${req.body['email']}</h4><h4>User Name: ${req.body['name']} / Address: ${req.body['address']}</h4><p>`     
    // mailInfo += req.body.message + `</p><div>`
    
    var mailData = {
        to: "support@mapscans.com",
        subject, content
    }

    await mailService(mailData, (result)=>{
        console.log("result", result)
        resData['sent'] = result
    })

    res.send(resData)
})

app.use("/print_pdf", async (req, res)=>{

   
    try{        
        if (!req.files || Object.keys(req.files).length === 0) {
            throw 'upload error'
        }        
        // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        let sampleFile = req.files.file;
        let pdfFile = req.files.pdf
        let fileRecord = 'file_'+Date.now()
        let imgSource = path.join(__dirname , '/public/assets/screenshot/'+fileRecord)
        let pdfSource = path.join(__dirname , '/public/assets/pdfs/'+fileRecord)
        // Use the mv() method to place the file somewhere on your server
        await pdfFile.mv(pdfSource + '.pdf' , function(err) {})
        // Use the mv() method to place the file somewhere on your server
        sampleFile.mv(imgSource + '.png' , async function(err) {

            if(err){
                console.log("file move error :", err)
                throw "file move error"
            }
            let imageData = `<div><img style="width: 100%;" src="https://podparkvr.com/assets/screenshot/${fileRecord}.png" />`            
            let pdfLink = `<h4><a href="https://podparkvr.com/assets/pdfs/${fileRecord}.pdf"> Click here to download pdf</a></h4></div>`     

            var mailData = {
                to: req.body.userEmail,
                subject: "PDF print of "+ req.session.user_email,
                content: req.body.sendData + imageData + pdfLink
            }


            await mailService(mailData, (result)=>{
                console.log("result", result)
            })
            res.send({status: "success"})
        })
    }catch(e){
        console.log("error :", e)
        res.redirect('/file_manager')
    }
})


app.use('/send-email', async (req, res)=>{
    console.log("request : ", req.body)
    let resData = {
        status: "success",
        data: req.body,
        sent: {}
    }
    let reqParams = req.body.params
    let content = ""
    let subject = ""


    // if(reqParams.subject == 'order-now' || reqParams.subject == 'get-in-touch'){
    //     subject = `${reqParams.name} has sent a direct message to Mapscans!`
        
    //     content = `<div>
    //         <p>
    //             ${reqParams.message}        
    //         </p>

    //         <h5>
    //             Customer Information
    //         </h5>
            
    //         <table>
    //             <tbody>
    //                 <tr>
    //                     <td  align="center">Name</td>
    //                     <td  align="center">Email</td>
    //                     <td  align="center">Phone</td>
    //                     <td  align="center">Address</td>
    //                 </tr>

    //                 <tr>
    //                     <td  align="center">${reqParams.name}</td>
    //                     <td  align="center">${reqParams.email}</td>
    //                     <td  align="center">${reqParams.phone}</td>
    //                     <td  align="center">${reqParams.address}</td>
    //                 </tr>
    //             </tbody>
    //         </table>
    //     </div>`

    // }else if(reqParams.subject == 'become-scanner'){
    //     subject = `${reqParams.name} wants to enroll as a scanner Mapscans!`
        
    //     content = `<div>
    //         <p>
    //             ${reqParams.message}        
    //         </p>

    //         <h5>
    //             Customer Information
    //         </h5>
            
    //         <table>
    //             <tbody>
    //                 <tr>
    //                     <td  align="center">Name</td>
    //                     <td  align="center">Email</td>
    //                     <td  align="center">Phone</td>
    //                     <td  align="center">Address</td>
    //                 </tr>

    //                 <tr>
    //                     <td  align="center">${reqParams.name}</td>
    //                     <td  align="center">${reqParams.email}</td>
    //                     <td  align="center">${reqParams.phone}</td>
    //                     <td  align="center">${reqParams.address}</td>
    //                 </tr>
    //             </tbody>
    //         </table>
    //     </div>`
    // }else if(reqParams.subject == "subscribe-update"){
    //     subject = `${reqParams.email} has subscribed to updates.`
    //     content = `<h4>${subject}</h4>`
    // }

    // let mailInfo = `<div><h4>User Email: ${req.body['email']}</h4><h4>User Name: ${req.body['name']} / Address: ${req.body['address']}</h4><p>`     
    // mailInfo += req.body.message + `</p><div>`
    
    var mailData = {
        to: "support@mapscans.com",
        subject, content
    }

    // await mailService(mailData, (result)=>{
    //     console.log("result", result)
    //     resData['sent'] = result
    // })

    // res.send(resData)
    sendEmail(req, res)
})



console.log("started server on :", 8080)
app.listen(8080);