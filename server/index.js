const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 9090;

const CLIENT_URL = 'http://localhost:8000';

app.use(cors({
    origin: CLIENT_URL
}))
app.use(express.json())
app.get('/', (req, res) => {
    res.send('hello world')
});

app.post('/contact', (req, res) => {
    const {
        name,
        email,
        message,
        song
    } = req.body;
    console.log(req.body);
    console.log('contact info received');
    res.send('contact info received')
});

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`))