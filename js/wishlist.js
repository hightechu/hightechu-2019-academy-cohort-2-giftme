function checkLower() {
    var LowerCost = document.getElementById("LowerCost").value;
    document.getElementById("LowerCost").innerHTML = x;
  }

function Show() {
  document.getElementById('form').style.visibility = "visible";
  document.getElementById('addgiftimage').style.visibility = "hidden";
}

function ShowPlus(){
  document.getElementById('addgiftimage').style.visibility = "visible";
}

function AddGift(addgiftname){
  document.getElementById('namestoredgift').innerHTML = document.getElementById("addgiftname").value;
  document.getElementById('descriptionstoredgift').innerHTML = document.getElementById("addDescription").value;
}

