
function LoadGiftsPage(){
    APIajax("gifts", "GET", ServerFormating);
    console.log("got the data");}
    

function ServerFormating(response, status){
    console.log(response);
    console.log(status);
    for (var i=0; i<response.length; i++){
      Gift_Format(response[i])
    }

  }

function Gift_Format(response){
  var Gift_Box = document.createElement("div");
  Gift_Box.setAttribute("class", "right");

  var newName = document.createElement("h2");
  newName.setAttribute("class", "title-text")
  newName.innerText = response.name;

  var newDesc = document.createElement("h4");
  newDesc.setAttribute("class", "price-text");
  newDesc.innerText = response.description;


  var newCost = document.createElement("h4");
  newDesc.setAttribute("class", "price-text");
  newCost.innerText = response.lower_cost + "-" + response.upper_cost + "$";

  Gift_Box.appendChild(newName);
  Gift_Box.appendChild(newDesc);
  Gift_Box.appendChild(newCost);

  console.log(newName);
  
 document.getElementById('rightbox').insertBefore(Gift_Box, document.getElementById('rightbox').firstChild);
}

LoadGiftsPage()

  