function solve() {
    let to = document.getElementById('selectMenuTo');
    let binary = document.createElement('option');
    binary.textContent = 'Binary';
    binary.value = 'binary';
    let hexadecimal = document.createElement('option');
    hexadecimal.textContent = 'Hexadeicmal';
    hexadecimal.value = 'hexadecimal';
    to.appendChild(binary);
    to.appendChild(hexadecimal);


    let button = document.getElementsByTagName('button')[0];

    button.addEventListener("click", function () {
        let numberFrom = parseFloat(document.getElementById('input').value);
        let convertTo = to.value;
        let result;

        if (convertTo === "binary") {
            result = numberFrom.toString(2);
        } else if (convertTo === "hexadecimal") {
            result = numberFrom.toString(16).toUpperCase();
        }

        let resultField = document.getElementById('result');
        resultField.value = result;
    });
}