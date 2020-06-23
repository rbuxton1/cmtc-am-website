const express = require('express');
const app = express();
const session = require('express-session');
const fs = require("fs");
const useragent = require('useragent');

var pages = JSON.parse(fs.readFileSync('json/pages.json', 'utf8'));
var transitions = JSON.parse(fs.readFileSync('json/transitions.json', 'utf8'));
var team = JSON.parse(fs.readFileSync('json/team.json', 'utf8'));

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(session({
                  secret: 'keyboard cat',
                  cookie: {}
                }));

app.get("/", function(req, res){
  if(req.session.notnew) {
    res.render("index", {members: team});
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
      if(t.v != null){
        res.render("transition", {dst: "/" + t.dst, video: t.v});
      } else {
        res.redirect("/" + t.dst);
      }
    }
  });
});

app.get("/leftwebgl", function(req, res){
  res.render("webgltemplate", {container: "/webgl/left/Build/LEFT_SCREEN_DONE.json"});
});
app.get("/rightwebgl", function(req, res){
  res.render("webgltemplate", {container: "/webgl/right/Build/RIGHT_SCREEN_DONE.json"});
});

app.get("/applinks", function(req, res){
  var agent = useragent.parse(req.headers['user-agent']);

  //These links will need to be updated as soon as they have actual store links.
  if(agent.os.toString().includes("iOS")){
    //If the device is iOS redirect to Apple App Store
    res.redirect("https://apps.apple.com/us/app/window-to-mars/id1497805924");
  } else if (agent.os.toString().includes("Android")) {
    //If the device is Android redirect to Google Play Store
    res.redirect("/w2m.apk");
  } else {
    res.redirect("/");
  }
});

console.log("Loaded " + pages.length + " pages and " + transitions.length + " tranistions!");

app.listen(80, function(){ console.log("Listening on port 80!"); });
