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
app.get("/t/main/printer", function(req, res){
  res.render("transition", {video: "/renders/transitions/home/printer.mp4", target: "/printer"});
})

//LEFT PAGES
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

//LEFT TRANSITIONS
app.get("/t/main/left/far", function(req,res){
  res.render("transition", {video: "/renders/transitions/home/ped_far_left.mp4", target: "/left/far"});
});
app.get("/t/main/left/near", function(req,res){
  res.render("transition", {video: "/renders/transitions/home/ped_near_left.mp4", target: "/left/near"});
});
app.get("/t/main/left/banner", function(req,res){
  res.render("transition", {video: "/renders/transitions/home/poster_left.mp4", target: "/left/banner"});
});
app.get("/t/main/left/legs", function(req,res){
  res.render("transition", {video: "/renders/transitions/home/screen_left.mp4", target: "/left/legs"});
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

//RIGHT TRANSITIONS
app.get("/t/main/right/far", function(req,res){
  res.render("transition", {video: "/renders/transitions/home/ped_far_right.mp4", target: "/right/far"});
});
app.get("/t/main/right/near", function(req,res){
  res.render("transition", {video: "/renders/transitions/home/ped_near_right.mp4", target: "/right/near"});
});
app.get("/t/main/right/banner", function(req,res){
  res.render("transition", {video: "/renders/transitions/home/poster_right.mp4", target: "/right/banner"});
});
app.get("/t/main/right/legs", function(req,res){
  res.render("transition", {video: "/renders/transitions/home/screen_right.mp4", target: "/right/legs"});
});

//TEST!! REMOVE BEFORE PRODUCTION
app.get("/template", function(req, res){
  res.render("template");
});
app.get("/webgl", function(req, res){
  res.render("webgltest");
});

app.listen(3000, function(){ console.log("Listening on port 3000!"); });
