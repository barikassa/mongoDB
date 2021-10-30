
const express=require("express");
const app=express();
const PORT=8080;

//!1._______________________________________________________________________________________________________________________________
// הדפס לקונסול את כל המחברים

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("blogerData");
  dbo.collection("author").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log("authorrrrrrrrrrrrrrrrrrr",result);
    db.close();
  });
});

// הדפס לקונסול את כל הפוסטים

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("blogerData");
  dbo.collection("posts").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log("postssssssssssssssssssssssssssssssssssss",result);
    db.close();
  });
});

//!2.__________________________________________________________________________________________________________________________________
// כתוב פונקציה המקבל collection: ומציג את כל התוכן שבו

// function showCollectionData(authorArg){
  //   MongoClient.connect(url, function(err, db) {
    //     if (err) throw err;
    //     var dbo = db.db("blogerData");
    //     dbo.collection(authorArg).find({}).toArray(function(err, result) {
      //       if (err) throw err;
      //       console.log("authorrrrrrrrrrrrrrrrrrr",result);
      //       db.close();
      //     });
      //   });
      // }
      // showCollectionData("author")
      
      
      
      app.listen(PORT,()=>{
        console.log("app is loading");
      })
      
      
      










