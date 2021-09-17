const express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'public')));



app.listen(port, ()=>{
  console.log(`Listening to port ${port}`);
})