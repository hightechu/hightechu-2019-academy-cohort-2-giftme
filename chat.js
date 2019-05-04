function updateChat(chat) {
    document.getElementById('chatarea').innerHTML = document.getElementById('chatarea').innerHTML + "<br>" + chat;
    document.getElementById("textbox").value = "";
}
