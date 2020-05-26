const express = require('express');
const app = express();
const session = require('express-session');
const fs = require("fs");

var pages = JSON.parse(fs.readFileSync('pages.json', 'utf8'));

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

pages.forEach(function(page){
  app.get(page.endpoint, function(req, res){
    var c = fs.readFileSync(page.content);
    res.render("template", {title: page.title, image: page.image, links: page.links, content: c});
  });
  console.log("REGISTERED ENDPOINT: " + page.endpoint + "!");
});

app.listen(3000, function(){ console.log("Listening on port 3000!"); });
