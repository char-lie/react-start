'use strict';

const express = require('express');
const path = require('path');

const app = express();

app.use('/build', express.static(path.join(__dirname, '..', 'build')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.get('/get-random', (req, res) => {
    const result = [];
    for (let i = 0; i < 10; i++) {
        result.push(Math.random());
    }
    res.json(result);
});

app.listen(3000, () => {
    console.log('Started listening');
});
