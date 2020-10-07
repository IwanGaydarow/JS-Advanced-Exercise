function notify(message) {
    let notificationConteiner = document.getElementById('notification');
    notificationConteiner.innerHTML = message;
    notificationConteiner.style.display = 'block';
    let closeNot = function(){
        notificationConteiner.style.display = 'none';
    }

    let timeOut = setTimeout(closeNot, 2000);
}