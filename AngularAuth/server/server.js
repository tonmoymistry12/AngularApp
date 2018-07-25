const express = require('express');
const bodyParser = require('body-parser');
const api = require('./route/api')
const port = 3000;

//We will create instance of express also speccify body-parser to handel json data

const app = express();

app.use(bodyParser.json())
app.use('/api', api)
//code to test get request
app.get('/', function(req, res){
    res.send('Hello From Server')
})

app.listen(port, function(){
    console.log("server running in local host "+port);
})