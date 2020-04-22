const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("index");
});
app.get("/banner", function(req, res){
  res.render("banner");
});
app.get("/items", function(req, res){
  res.render("items");
});
app.get("/kiosk", function(req, res){
  res.render("kiosk");
});
app.get("/panel", function(req, res){
  res.render("panel");
});
app.get("/pedestal", function(req, res){
  res.render("pedestal");
});

app.listen(3000, function(){ console.log("Listening on port 3000!"); });
