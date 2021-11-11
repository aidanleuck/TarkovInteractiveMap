require('dotenv').config()
const { Pool } = require('pg')
const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 8000; //Line 3

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
});

// pools will use environment variables
// for connection information
const pool = new Pool({
  ssl: {
    rejectUnauthorized: false
  }
})
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})