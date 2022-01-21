const express = require('express');
const mongoose = require('mongoose');
const router = require('./handlers/gmailHandler');

const port = process.env.PORT || 4000;

const mongoPath =
    'mongodb+srv://gmail:avSelIPJDhLf9Bpw@tamiz.grit7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const app = express();
const password = '';
const url = 'http://localhost:4000';
app.use(express.json());
mongoose
    .connect(mongoPath)
    .then(() => {})
    .catch((err) => {
        console.log(err);
    });

app.use('/', router);
app.use('/', (req, res) => {
    res.send('Hi!');
});
app.listen(port, (req, res) => {});
