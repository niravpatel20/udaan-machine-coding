const express = require('express');
const dealRouter = require('./api/deal');
const itemRouter = require('./api/item');

const app = express();
require('./db/db');

const port = process.env.PORT || 3000;

app.use('/', dealRouter);
app.use('/item', itemRouter);



app.listen(3000, () => {
    console.log('Server is up on ', port);
})