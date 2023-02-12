import express from 'express';

import connnectToDatabase from './helpers.mjs'

const app = express();

app.get('/', async (req, res) => {
    res.send('<h2>Hi there!</h2>');
});

await connnectToDatabase();

app.listen(3000);