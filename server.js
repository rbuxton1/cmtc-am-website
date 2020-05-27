const express = require('express');
const app = express();
const session = require('express-session');
const fs = require("fs");

var pages = JSON.parse(fs.readFileSync('pages.json', 'utf8'));
var transitions = JSON.parse(fs.readFileSync('transitions.json', 'utf8'));

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(session({
                  secret: 'keyboard cat',
                  cookie: {}
                }));

app.get("/", function(req, res){
  if(req.session.notnew) {
    res.render("index");
  } else {
    res.redirect("/help");
  }
});
app.get("/help", function(req, res){
  req.session.notnew = true;
  res.render("help");
});
app.get("/home", function(req, res){
  res.redirect("/");
});

pages.forEach(function(page){
  app.get("/" + page.endpoint, function(req, res){
    res.render("template", page);
  });
});

app.get("/t", function(req, res){
  transitions.forEach(function(t){
    if(t.src == req.query.src && t.dst == req.query.dst){
      res.render("transition", {dst: "/" + t.dst, video: t.v});
    }
  });
});

console.log("Loaded " + pages.length + " pages and " + transitions.length + " tranistions!");

app.listen(3000, function(){ console.log("Listening on port 3000!"); });
