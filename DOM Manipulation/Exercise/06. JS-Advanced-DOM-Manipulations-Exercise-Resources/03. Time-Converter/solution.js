function attachEventsListeners() {
    let main = document.querySelector('main');
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let convert = {
        days: function(value){
            hours.value = value * 24;
            minutes.value = value * 1440;
            seconds.value = value * 86400;
        },  
        hours: function(value) {
            days.value = value / 24;
            minutes.value = value * 60;
            seconds.value = value * 3600;
        },
        minutes: function(value){
            days.value = value / 1440;
            hours.value = value / 60;
            seconds.value = value * 60;
        },
        seconds: function(value){
            days.value = value / 86400;
            hours.value = value / 3600;
            minutes.value = value / 60;
        }
    }

    main.addEventListener('click', (e) => {
        if(e.target.type === 'button'){
            let clickInputValue = e.target.previousElementSibling.value;
            let clickInputFild = e.target.previousElementSibling.id;
            
            convert[clickInputFild](clickInputValue);
        }
    })
}