const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app=express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
const gitHubRoute = require('./routes/github')

app.use('/github',gitHubRoute);

app.listen(PORT,()=>console.log(`Server connected @ ${PORT}`));
