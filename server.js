const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("index");
});
app.get("/printer", function(req, res){
  res.render("printer");
});

//LEFT
app.get("/left/far", function(req, res){
  res.render("left/far");
});
app.get("/left/near", function(req, res){
  res.render("left/near");
});
app.get("/left/banner", function(req, res){
  res.render("left/banner");
});
app.get("/left/legs", function(req, res){
  res.render("left/legs");
});

//RIGHT
app.get("/right/far", function(req, res){
  res.render("right/far");
});
app.get("/right/near", function(req, res){
  res.render("right/near");
});
app.get("/right/banner", function(req, res){
  res.render("right/banner");
});
app.get("/right/legs", function(req, res){
  res.render("right/legs");
});

//TEST!! REMOVE BEFORE PRODUCTION
app.get("/template", function(req, res){
  res.render("template");
});
app.get("/webgl", function(req, res){
  res.render("webgltest");
});

app.listen(3000, function(){ console.log("Listening on port 3000!"); });
