function stopwatch() {
    let startBtn = document.getElementById('startBtn');
    let stopBtn = document.getElementById('stopBtn');
    let time = document.getElementById('time');
    let [seconds, minutes] = [0, 0];
    let [secFormat, minFormat] = ['', ''];
    let cancel;

    startBtn.addEventListener('click', (e) => {
        time.innerHTML = '00:00';
        function incrementSeconds() {
            seconds += 1;

            if (seconds >= 60) {
                minutes++;
                seconds = 0;
            }

            if (seconds < 10) {
                secFormat = `0${seconds}`;
            } else {
                secFormat = `${seconds}`;
            }

            if (minutes < 10) {
                minFormat = `0${minutes}`;
            } else {
                minFormat = `${seconds}`;
            }

            time.innerHTML = `${minFormat}:${secFormat}`;
        }

        cancel = setInterval(incrementSeconds, 1000);

        startBtn.disabled = true;
        stopBtn.disabled = false;

        stopBtn.addEventListener('click', () => {
            clearInterval(cancel);
            seconds = 0;
            minutes = 0;

            startBtn.disabled = false;
            stopBtn.disabled = true;
        })
    });
}