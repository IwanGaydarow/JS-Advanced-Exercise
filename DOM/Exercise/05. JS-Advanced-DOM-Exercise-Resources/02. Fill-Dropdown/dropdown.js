function addItem() {
    let select = document.getElementById('menu');
    let textItem = document.getElementById('newItemText');
    let textValue = document.getElementById('newItemValue');
    
    let op = document.createElement('option');
    op.textContent = textItem.value;
    op.value = textValue.value;
    select.appendChild(op);

    textItem.value = "";
    textValue.value = "";
}