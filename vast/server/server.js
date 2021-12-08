require('dotenv').config()
const { Pool } = require('pg')
const express = require('express'); //Line 1
const app = express(); //Line 2
const router = express.Router();
const port = process.env.PORT || 5000; //Line 3
const cors = require('cors');

// pools will use environment variables
// for connection information
const pool = new Pool({
  ssl: {
    rejectUnauthorized: false
  }
})

async function validate(username,password){
  try{
    const result = await pool.query('SELECT COUNT(*) as total FROM users WHERE username = $1 AND password = $2', [username, password]);
    console.log(result);
    return parseInt(result.rows[0].total);
  }
  catch(err){
    console.log("Error with query!");
  }
  
}

app.use(cors({}));

app.use(express.json())

app.listen(port, (err) =>{
  if(err){
    console.log(err);
  }
  else{
    console.log(`Server started on port ${port}`)
  }
});
router.post('/validate', async function(req, res){
  
    const body = req.body;
    let result = await validate(body.username, body.userPassword);
    console.log(result);
    
    if(result > 0){
      res.status(200).send('Success');
    }
    else{
      res.status(404).send('Unauthorized');
    }
  });
app.use('/login', router);
