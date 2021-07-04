require('dotenv').config()
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'api',
    password: process.env.PGPASSWORD,
    port: 5432,
})
