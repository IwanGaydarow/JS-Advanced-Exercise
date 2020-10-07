function attachGradientEvents() {
    let div = document.getElementById('gradient');
    let result = document.getElementById('result');

    div.addEventListener('mousemove', (e) => {
        let x = e.offsetX;
        result.innerHTML =Math.floor(x / 3) + '%';
    })
}