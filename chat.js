function updateChat(chat) {
    document.getElementById('chatarea').innerHTML = document.getElementById('chatarea').innerHTML + "<br>" + chat;
    document.getElementById("textbox").value = "";
}
function updateChat2(chat) {
    if(event.keyCode === 13) {
         document.getElementById('chatarea').innerHTML = document.getElementById('chatarea').innerHTML + "<br>" + chat;
         document.getElementById("textbox").value = "";
    }
}