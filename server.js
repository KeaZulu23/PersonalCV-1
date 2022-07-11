const express = require('express'); // is to create a server
const path = require('path'); // is to run server continuously
const nodemailer = require('nodemailer'); // is to send mails
const dotenv = require('dotenv'); // is for making environment variable. We'll use this store our email id and password outside of server

// so we can access environment variable.
dotenv.config();

// storing your public folder path to a variable and make server.
let initialPath = path.join(__dirname, "public");
let app = express();

app.use(express.static(initialPath));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(initialPath, "index.html"));
})

app.listen(3000, () => {
    console.log('listening.....');
})

app.post('/mail', (req, res) => {
    const { firstname, lastname, email, msg } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })

    const mailOptions = {
        from: 'sender email',
        to: 'receiver email',
        subject: 'Postfolio',
        text: `First name: ${firstname}, \nLast name: ${lastname}, \nEmail: ${email}, \nMessage: ${msg}`
    }

    transporter.sendMail(mailOptions, (err, result) => {
        if (err){
            console.log(err);
            res.json('opps! it seems like some error occured plz. try again.')
        } else{
            res.json('thanks for e-mailing me. I will reply to you within 2 working days');
        }
    })
})