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
    document.getElementById("orb_interactive").src = "static/shadow_orb/example_on.png";
  } else {
    document.getElementById("orb_interactive").src = "static/shadow_orb/example_off.png";
  }
}
