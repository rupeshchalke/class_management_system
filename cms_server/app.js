const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

require ("./router") (app);

app.listen(9998, function(){
    console.log("server is running on port no:9998")
})