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
app.get("/ar", function(req, res){
  res.render("ar");
})

app.get("/t/items", function(req, res){
  res.render("transition", {video: "bishop", target: "/items"});
});
app.get("/t/panel", function(req, res){
  res.render("transition", {video: "panel", target: "/panel"});
});

app.listen(3000, function(){ console.log("Listening on port 3000!"); });
