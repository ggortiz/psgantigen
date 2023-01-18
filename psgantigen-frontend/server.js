const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
const cors = require("cors");

const port = process.env.PORT || 80;

const app = express();

//cors middleware
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname,'public')));


//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'public/index.html'));
});

//start server
const server = app.listen(port, () => {
    console.log("psg antigen frontend server started at port " + port);    
});
