const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = process.env.PORT || 3000;
require('dotenv').config()



main().then(()=> console.log("mongodb is connected.")).catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.DB_URL);
  
    app.get('/', (req, res) => {
        res.send('Hello World!')
      });
    
  } 



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})