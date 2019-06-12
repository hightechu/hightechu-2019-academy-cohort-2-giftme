function checkLower(x) {
    var LowerCost = document.getElementById("LowerCost").value;
    document.getElementById("LowerCost").innerHTML = x;
  }

function Show() {
  document.getElementById('form').style.visibility = "visible";
  document.getElementById('addgiftimage').style.visibility = "hidden";
}


function EditGift(addgiftname){
  document.getElementById('namestoredgift').innerHTML = document.getElementById("addgiftname").value;
  document.getElementById('descriptionstoredgift').innerHTML = document.getElementById("addDescription").value;
  document.getElementById('storedCost').innerHTML = document.getElementById("LowerCost").value + "-" + document.getElementById("UpperCost").value + "$";
  document.getElementById('addgiftimage').style.visibility = "visible";
  document.getElementById('form').style.visibility = "hidden";
}

function LoadGiftsPage(){
  APIajax("gifts", "GET", ServerFormating);
  console.log("got the data");
}

function ServerFormating(response, status){
  console.log(response);
  console.log(status);
  for (var i=0; i<response.length; i++){
    Gift_Format(response[i])
  }
}

function ServerResponse(response, status){
  console.log("fucntion called!!!!!!!!!!!!!!!!!");
  console.log(response);
  console.log(status)
  if (status==422){
    alert("Please put a name in the name box");
    return;
  }
  if (status!=200){
    alert("ERRRRRRRRROOOOOORRRRR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    return;
  }
  Gift_Format(response);
}

function Gift_Format(gift){
  var Gift_Box = document.createElement("div");
  Gift_Box.setAttribute("class", "storedgift");
  
  var newName = document.createElement("h2");
  newName.innerText = gift.name;
  var newDesc = document.createElement("h4");
  newDesc.innerText = gift.description
  var newCost = document.createElement("h4");
  newCost.innerText = gift.lower_cost + "-" + gift.upper_cost + "$";

  Gift_Box.appendChild(newName);
  Gift_Box.appendChild(newDesc);
  Gift_Box.appendChild(newCost);
  document.getElementById('giftcontainer').insertBefore(Gift_Box, document.getElementById('giftcontainer').firstChild);}
  



/* with the create element function, should replace AddGift in uses when it works and Add gift be changed to edit gift*/ 
function AddGift(addgiftname){

  var Gift_data = {
    name:document.getElementById("addgiftname").value,
    description:document.getElementById("addDescription").value,
    lower_cost:document.getElementById("LowerCost").value, 
    upper_cost:document.getElementById("UpperCost").value
  }

  
  APIajax("gifts", "POST", ServerResponse, Gift_data)

  
}

var giftcontainer

/* register funcition*/


function registerGift() {
  var jsonObj = new Object();
  jsonObj.GiftName = document.getElementById("giftcontainer").value;
  /*jsonObj.GiftValue =  Make this equal to the number of the array?*/
  
}

LoadGiftsPage()


/* Need to add
After BACKEND
- X button
- Edit button
- Sort button
 */