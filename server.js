//require for Express module
const express = require("express");
const items = require('./cart-items');

//creates an instatnce of an Express Server
const app = express();

app.use('/', items);

//define the port
const port = 3000;

app.listen(port, () => console.log (`listening on port: ${port}.`));