// Require all the things we need body parser not neede as it is included in express
const express = require('express');
const cors = require('cors');
const path = require('path');
// to connect to mongodb database 
const mongoose = require('mongoose');

// to configure environmemt 
require('dotenv').config();

// to create express server
const app = express();


// the port where server will be 
const port = process.env.PORT||5000;


// mongoose connection 
// uri is where database is stored
const uri = process.env.MONGODB_URI;
// due to some updates to mongodb we used flags 
mongoose.connect(uri,{useNewUrlParser:true, useCreateIndex:true,useUnifiedTopology: true});
const connection = mongoose.connection;

connection.on('connected' , ()=>{
    console.log('MongoDb database connection established succesfully');
})
// Now create schemas


// middlewares
app.use(cors());
app.use(express.json());

// import routes
const exerciseRouter = require('./routes/exercises');
const playerRouter = require('./routes/players');

// calling the routes endpoints
app.use('/exercises', exerciseRouter);
app.use('/players',playerRouter);

// to make use of heroku 
// serve static assets if we are in production 

if(process.env.NODE_ENV === 'production'){
    // set static folder
    app.use(express.static('client/build'))

    app.get('*',(req,res)=>{
        res.sendfile(path.resolve(__dirname,'client','build','index.html'))
    })
}
// app.use(express.static(path.join(__dirname,"client","build")))


// app.get("*",(req,res)=>{
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"))
// })
// starts to listen to a certain port 
app.listen(port ,() => {
    console.log(`Server running on port : ${port}`);
})


