/* * * * * * * * * * * * * * * * * * * * *
 *  General purpose accordian expand/contract
 * function. EXPECTS: id to expand
 * * * * * * * * * * * * * * * * * * * * */
function expand(id){
  var x = document.getElementById(id);
  if(x.className.indexOf("w3-show") == -1){
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}


//for the shadow orb_interactive
var orbState = false;
function orbInteract(){
  orbState = !orbState;
  if(orbState){
    document.getElementById("orb_interactive").src = "/static/shadow_orb/example_on.png";
  } else {
    document.getElementById("orb_interactive").src = "/static/shadow_orb/example_off.png";
  }
}

//small info fade in out
var pos = 0;
var forward = true;
function fadeInOut(id, texts){
  var e = document.getElementById(id);
  var timer = setInterval(function(){
    console.log(forward + " " + e.style.opacity);
    if(!e.style.opacity) e.style.opacity = 1;
    e.innerHTML = texts[0];

    if(forward){
      console.log("forward");
      e.style.opacity -= .1;
      if(e.style.opacity <= .1){
        e.style.opacity = 0;
        forward = false;
      }
    } else {
      e.style.opacity += .1;
      if(e.style.opacity == 1) {
        console.log("triggered");
        forward = true;
        e.innerHTML = texts[pos];
      }
    }
  }, 50);
}
