function postMessageAJAX() {
    fn = function(response, status){
        if('error' in response) {
            alert(response.error.message);
        }
        else {
            console.log("Chat message saved");
        }
    }

    var jsonObj = new Object();
    var d = new Date();
    jsonObj.time = d.getHours() + "/" + d.getMinutes() + " / " + d.getFullYear() + "/" + d.getMonth() + "/" + d.getDate();
    jsonObj.messageNo = "0";
    jsonObj.message = document.getElementById("message").value;
    jsonObj.ttl = 36000
    APIajax("chats", "POST", fn, jsonObj)
}


function updateChat(chat) {
    document.getElementById('chatarea').innerHTML = document.getElementById('chatarea').innerHTML + d.getHours() + "/" + d.getMinutes() + " / " + d.getFullYear() + "/" + d.getMonth() + "/" + d.getDate() + "<br>" + chat + "<br>";
    postMessageAJAX();
    document.getElementById("message").value = "";

    // Post to server
 
}
function updateChat2(chat) {
    if(event.keyCode === 13) {
         var d = new Date();
         document.getElementById('chatarea').innerHTML = document.getElementById('chatarea').innerHTML + d.getHours() + "/" + d.getMinutes() + " / " + d.getFullYear() + "/" + d.getMonth() + "/" + d.getDate() + "<br>" + chat + "<br>";
         postMessageAJAX();
         document.getElementById("message").value = "";
    }
}

function updateChat3(chat) {
    if(event.keyCode === 13) {
         var d = new Date();
         document.getElementById('chatarea').innerHTML = document.getElementById('chatarea').innerHTML + d.getHours() + "/" + d.getMinutes() + " / " + d.getFullYear() + "/" + d.getMonth() + "/" + d.getDate() + "<br>" + chat + "<br>";
         postMessageAJAX();
         document.getElementById("message").value = "";
    }
}

function loadChat() {
    fn = function(response, status){
        if('error' in response) {
            alert(response.error.message);
        }
        else {
            for (chat in response) {
                document.getElementById('chatarea').innerHTML = document.getElementById('chatarea').innerHTML + chat.time + "<br>" + chat.message + "<br>";
            }
        }
    }

    APIajax("chats", "GET", fn)
}

loadChat();