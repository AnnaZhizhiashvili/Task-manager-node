const { Client } = require('pg');

require('dotenv').config();  // Load environment variables from .env file

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});


module.exports = client;
