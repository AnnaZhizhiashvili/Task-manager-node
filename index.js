const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const router = require('./routes/routes')



app.use(cors());

app.use(express.json());

app.use('/api/v1', router);


app.listen(3200, () => {
    console.log('running on port 3200')
})