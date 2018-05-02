var express = require('express');
var app = express();
var http = require('http').Server(app);
const parser = require('body-parser');
const path = require('path');

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static('client/build'));

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require("mongodb").ObjectID;



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


MongoClient.connect('mongodb://localhost:27017', function(err, client) {
  if(err) {
    console.log(err);
    return;
  }

  const db = client.db('footballdb');


  app.get("/api/favourites", function (req, res) {
    const favouritesCollection = db.collection("favourites_list");
    favouritesCollection.find().toArray(function (err, allFavourites) {
      if (err) {
        console.log(err);
        res.status(500);
        res.send();
      }
      res.json(allFavourites);
    });
  })


  app.post("/api/favourites", function (req, res) {
    const favouritesCollection = db.collection("favourites_list");
    const favouriteToSave = req.body;

    favouritesCollection.save(favouriteToSave, function (err, result) {
      if (err) {
        console.log(err);
        res.status(500);
        res.send();
      }
      console.log("Save successful!");
      res.status(201);
      res.json(favouriteToSave);
    })
  });


  app.delete("/api/favourites", function (req, res) {
    const favouritesCollection = db.collection("favourites_list");
    const filterObject = {};

    favouritesCollection.deleteMany(filterObject, function (err, result) {
      if (err) {
        console.log(err);
        res.status(500);
        res.send();
      }
      console.log("Delete successful!");
      res.status(204);
      res.json(result);
    });
  })


  app.put("/api/favourites/:id", function (req, res) {
    const favouritesCollection = db.collection("favourites_list");
    const objectID = ObjectID(req.params.id);
    const filterObject = {_id: objectID};
    const updatedData = req.body;

    favouritesCollection.update(filterObject, updatedData, function (err, result) {
      if (err) {
        console.log(err);
        res.status(500);
        res.send();
      }
      console.log("Update successful!");
      res.status(204);
      res.send();
    })
  })

  app.delete("/api/favourites/:id", function(req,res){
    const favouritesCollection = db.collection("favourites_list");
    const objectID = ObjectID(req.params.id);
    const filterObject = {_id: objectID};

    favouritesCollection.deleteOne(filterObject, function(err,result){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }
      console.log("delete successful");
      res.status(204);
      res.json(result);
    })
  })



  var server = http.listen(3001, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log('football app listening at http://%s:%s', host, port);
  });

});
