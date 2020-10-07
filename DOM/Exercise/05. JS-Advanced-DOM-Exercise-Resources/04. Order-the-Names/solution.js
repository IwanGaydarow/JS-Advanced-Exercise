function solve() {
    let input = document.getElementsByTagName('input')[0];
    let button = document.getElementsByTagName('button')[0];
    let li = document.getElementsByTagName('li');

    
        button.onclick = () => {
            let value = input.value;

            let firstLether = value[0].toLowerCase();
            let n = firstLether.charCodeAt(0) - 97;
            let liToAdd = li[n];

            let content = liToAdd.textContent;
            if (content === "") {
                liToAdd.textContent = value;
            } else {
                liToAdd.textContent = content + ", " + value;
            }

            input.value = "";
        }
}