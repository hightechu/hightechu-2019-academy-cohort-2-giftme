function checkLower(x) {
    var LowerCost = document.getElementById("LowerCost").value;
    document.getElementById("LowerCost").innerHTML = x;
  }

function Show() {
  document.getElementById('form').style.visibility = "visible";
  document.getElementById('addgiftimage').style.visibility = "hidden";
}


function AddmhghjGift(addgiftname){
  document.getElementById('namestoredgift').innerHTML = document.getElementById("addgiftname").value;
  document.getElementById('descriptionstoredgift').innerHTML = document.getElementById("addDescription").value;
  document.getElementById('storedCost').innerHTML = document.getElementById("LowerCost").value + "-" + document.getElementById("UpperCost").value + "$";
  document.getElementById('addgiftimage').style.visibility = "visible";
  document.getElementById('form').style.visibility = "hidden";
}

/* with the create element function, should replace AddGift in uses when it works and Add gift be changed to edit gift*/ 
function AddGift(addgiftname){
  var Gift_Box = document.createElement("div");
  Gift_Box.setAttribute("class", "storedgift");
  
  var newName = document.createElement("h2");
  newName.innerText = document.getElementById("addgiftname").value;
  var newDesc = document.createElement("h4");
  newDesc.innerText = document.getElementById("addDescription").value;
  var newCost = document.createElement("h4");
  newCost.innerText = document.getElementById("LowerCost").value + "-" + document.getElementById("UpperCost").value + "$";

  Gift_Box.appendChild(newName);
  Gift_Box.appendChild(newDesc);
  Gift_Box.appendChild(newCost);
  document.getElementById('giftcontainer').appendChild(Gift_Box);
}