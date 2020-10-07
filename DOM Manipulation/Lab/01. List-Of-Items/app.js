function addItem() {
    let input = document.getElementById('newItemText');
    let ul = document.getElementById('items');

    let newLi = document.createElement('li');
    newLi.textContent = input.value;
    ul.appendChild(newLi);
    input.value = '';
}