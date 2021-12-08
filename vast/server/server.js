require('dotenv').config()
const { Pool } = require('pg')
const express = require('express'); //Line 1
const app = express(); //Line 2
const router = express.Router();
const port = process.env.PORT || 8000; //Line 3

// pools will use environment variables
// for connection information
const pool = new Pool({
  ssl: {
    rejectUnauthorized: false
  }
})


function validate(username,id){
  pool.query('SELECT username, last_name FROM users where username = $1 and user_id = $2',[username,id],function(err,result){
    if(err || result.rowCount == 0){
      console.log("False");
    } else{
      console.log("true")
      console.log(result.rows)
    }
  });
}


router.get('/validate', function(req, res){
    res.send('Dont want to ruin Aidans life');
  });
app.use('/login', router);

app.listen(port, (err) =>{
  if(err){
    console.log(err);
  }
  else{
    console.log(`Server started on port ${port}`)
  }
});