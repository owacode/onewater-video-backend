const express=require('express');
const app=express();
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const video = require('./routes/video_routes');
const auth = require('./routes/auth');
app.use(bodyParser.json());

const db=mongoose.connect( "mongodb+srv://onewater:onewater123@cluster0-hmjdu.mongodb.net/onewater")
        .then(()=>
        {console.log("Connection to MongoDB is Successfull !");
    })
        .catch((err)=> {
            console.log("Connection to Database Failed !",err);
        });
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization,Null"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS",
    );
    next();
  });

  app.get('/',(req,res)=>{
      res.json({
          "Message":"Connected TO OneWater Video Posting.."
      })
  })

  app.use('',video);
  app.use('',auth);

  module.exports = app;
