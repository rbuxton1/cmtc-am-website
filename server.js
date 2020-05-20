const express = require('express');
const app = express();
const session = require('express-session');

var symmTrans =[{src: "far", dst: "poster"},
                {src: "far", dst: "near"},
                {src: "near", dst: "poster"},
                {src: "legs", dst: "poster"},
                {src: "near", dst: "legs"},
                {src: "legs", dst: "printer"}];
var indiTrans =["ped_far_left",
                "ped_near_left",
                "legs_left",
                "poster_left",
                "printer",
                "ped_far_right",
                "ped_near_right",
                "legs_right",
                "poster_right"];

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
})
app.get("/ar", function(req, res){
  res.render("ar");
});
app.get("/left/printer", function(req, res){
  res.render("printer");
});
app.get("/right/printer", function(req, res){
  res.render("printer");
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
app.get("/left/poster", function(req, res){
  res.render("left/poster");
});
app.get("/left/legs", function(req, res){
  res.render("left/legs");
});

//* * * * * * * * * * * * * * * * LEFT TRANSITIONS * * * * * * * * * * * * * * * *
//from home
app.get("/t/main/left/far", function(req,res){
  res.render("transition", {video: "/renders/transitions/home/ped_far_left.mp4", target: "/left/far"});
});
app.get("/t/main/left/near", function(req,res){
  res.render("transition", {video: "/renders/transitions/home/ped_near_left.mp4", target: "/left/near"});
});
app.get("/t/main/left/poster", function(req,res){
  res.render("transition", {video: "/renders/transitions/home/poster_left.mp4", target: "/left/poster"});
});
app.get("/t/main/left/legs", function(req,res){
  res.render("transition", {video: "/renders/transitions/home/screen_left.mp4", target: "/left/legs"});
});
//between screens
/*app.get("/t/left/far/poster", function(req, res){
  res.render("transition", {video: "/renders/transitions/left/far_poster.mp4", target: "/left/poster"});
});
app.get("/t/left/poster/far", function(req, res){
  res.render("transition", {video: "/renders/transitions/left/poster_far.mp4", target: "/left/far"});
});
app.get("/t/left/far/near", function(req, res){
  res.render("transition", {video: "/renders/transitions/left/far_near.mp4", target: "/left/near"});
});
app.get("/t/left/near/far", function(req, res){
  res.render("transition", {video: "/renders/transitions/left/near_far.mp4", target: "/left/far"});
});
app.get("/t/left/near/poster", function(req, res){
  res.render("transition", {video: "/renders/transitions/left/near_poster.mp4", target: "/left/poster"});
});
app.get("/t/left/poster/near", function(req, res){
  res.render("transition", {video: "/renders/transitions/left/poster_near.mp4", target: "/left/far"});
});
app.get("/t/left/poster/legs", function(req, res){
  res.render("transition", {video: "/renders/transitions/left/poster_legs.mp4", target: "/left/legs"});
});
app.get("/t/left/legs/poster", function(req, res){
  res.render("transition", {video: "/renders/transitions/left/legs_poster.mp4", target: "/left/poster"});
});
app.get("/t/left/legs/near", function(req, res){
  res.render("transition", {video: "/renders/transitions/left/legs_near.mp4", target: "/left/near"});
});
app.get("/t/left/near/legs", function(req, res){
  res.render("transition", {video: "/renders/transitions/left/near_legs.mp4", target: "/left/legs"});
});
app.get("/t/left/legs/printer", function(req, res){
  res.render("transition", {video: "/renders/transitions/left/legs_printer.mp4", target: "/left/printer"});
});
app.get("/t/left/printer/legs", function(req, res){
  res.render("transition", {video: "/renders/transitions/left/printer_legs.mp4", target: "/left/legs"});
});*/

symmTrans.forEach((t) => {
  app.get("/t/left/" + t.src + "/" + t.dst, function(req, res){
    res.render("transition", {video: "/renders/transitions/left/" + t.src + "_" + t.dst + ".mp4", target: "/left/" + t.dst});
  });
  app.get("/t/left/" + t.dst + "/" + t.src, function(req, res){
    res.render("transition", {video: "/renders/transitions/left/" + t.dst + "_" + t.src + ".mp4", target: "/left/" + t.src});
  });
  app.get("/t/right/" + t.src + "/" + t.dst, function(req, res){
    res.render("transition", {video: "/renders/transitions/right/" + t.src + "_" + t.dst + ".mp4", target: "/right/" + t.dst});
  });
  app.get("/t/right/" + t.dst + "/" + t.src, function(req, res){
    res.render("transition", {video: "/renders/transitions/right/" + t.dst + "_" + t.src + ".mp4", target: "/right/" + t.src});
  });
});

indiTrans.forEach((t) => {
  app.get("/t/" + t, function(req, res){
    res.render("transition", {video: "/renders/transitions/to_home/" + t + ".mp4", target:"/"});
  });
});


//RIGHT
app.get("/right/far", function(req, res){
  res.render("right/far");
});
app.get("/right/near", function(req, res){
  res.render("right/near");
});
app.get("/right/poster", function(req, res){
  res.render("right/poster");
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
app.get("/t/main/right/poster", function(req,res){
  res.render("transition", {video: "/renders/transitions/home/poster_right.mp4", target: "/right/poster"});
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
