const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();
const {
    Client
} = require('pg')

const {
    createTransport
} = nodemailer;

const app = express();
const PORT = process.env.PORT || 9090;
const connectionString = process.env.DATABASE_URL;

const CLIENT_URL = 'http://localhost:8000';
app.use(cors({
    origin: CLIENT_URL
}))
app.use(express.json())
app.get('/', (req, res) => {
    res.send('hello world')
});

const client = new Client({
    connectionString,
    ssl: {
        rejectUnauthorized: false
    }
})

client.connect().catch(error => {
    console.log(error)
});

const transporter = createTransport({
    service: "hotmail",
    auth: {
        user: process.env.MAILER_EMAIL,
        pass: process.env.MAILER_PASSWORD
    }
})


app.post('/save', async (req, res) => {
    const {
        name,
        email,
        message,
        song = ''
    } = req.body;

    console.log(req.body)

    try {
        const query = {
            text: 'INSERT INTO rsvp(email, name, message, song) VALUES($1,$2,$3,$4)',
            values: [email, name, message, song]
        }
        const result = await client.query(query);
        console.log(result);
        client.end();
    } catch (error) {
        throw error;
    }
});

app.post('/rsvp', async (req, res) => {
    const {
        name,
        email,
        message,
        song = ''
    } = req.body;

    const options = {
        from: `${process.env.MAILER_EMAIL} `,
        to: 'cristian.restituyo@gmail.com',
        subject: `RSVP from ${name} <${email}>`,
        html: `
            <b>Recommended song</b>:${song}</br>
            <p>${message}</p>
            `
    }

    try {
        const response = await transporter.sendMail(options)
        res.send({
            response
        });
    } catch (error) {
        res.sendStatus(500);
        console.error(error);
    }

});



app.listen(PORT, () => console.log(`listening on port: ${PORT}`))