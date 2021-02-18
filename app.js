const express = require('express')
const app = express()
const port = process.env.PORT || 80

const { Pool, Client } = require('pg')
const pool = new Pool({
    user: 'pynsatresyufgz',
    host: 'ec2-54-72-155-238.eu-west-1.compute.amazonaws.com',
    database: 'dq59rudalaej4',
    password: '153df5e7e757dea7accecc5de46e1ecdec8a48da907709a8a2330666d09e0023',
    port: 5432,
    ssl: {
        rejectUnauthorized: false,
    },
})



app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/test', (req, res) => {
    res.send('Test!')
})
app.get('/lijst', (req, res) => {
    pool.query('SELECT * FROM lijst', (err, res2) => {
        //console.log(res2);
        res.send(JSON.stringify(res2.rows));
 })
})
app.listen(port, () => {
    console.log(`App Server luistert op poort ${port}`)
})