'use strict';

const express = require('express');
const path = require('path');

const app = express();

app.use('/build', express.static(path.join(__dirname, '..', 'build')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.options('/get-random', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.send(200);
});

app.get('/get-random', (req, res) => {
    const result = [];
    for (let i = 0; i < 10; i++) {
        result.push(Math.random());
    }
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.json({data: result});
});

app.listen(3000, () => {
    console.log('Started listening');
});
