function solve() {
   let messageForSend = document.getElementById('chat_input');
   let button = document.getElementById('send');

   button.addEventListener('click', function(){
      let newDiv = document.createElement('div');
      newDiv.classList.add("message", "my-message");
      newDiv.textContent = messageForSend.value;

      let to = document.getElementById('chat_messages');
      to.appendChild(newDiv);
      
      messageForSend.value = "";
   });
}


