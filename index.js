const mongoose = require('mongoose');
const express = require('express');
const app = express();
// parse requests of content-type - application/json
app.use(express.json());

const exerciseRoutes = require("./routes/exercise");

mongoose.connect("mongodb://localhost:27017/exercise",{
        useNewUrlParser:true,
        useUnifiedTopology:true
    },(err)=>{
        if(!err){
            console.log("Connected");
        }
        else{
            console.log("Error");
        }
});

//using exercise route

app.use(exerciseRoutes);

//setup server to listen on port 3000
const port = 3000;
app.listen(port,() => {
    console.log("Port is running on:"+port);
})