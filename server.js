const express = require('express');
const app = express();
const user = require('./models/user');
app.use(express.json());

require('dotenv').config();
const db_connect= require('./connect_db');
db_connect();

app.use('/user', require("./Routes/user"));


app.listen(process.env.PORT, (err)=>err ? console.log(err) : console.log(`Server is running `));
