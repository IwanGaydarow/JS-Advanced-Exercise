function addItem() {
    let input = document.getElementById('newText');
    let ul = document.getElementById('items');

    let newLi = document.createElement('li');
    newLi.innerHTML = input.value + '<a href="#">[Delete]</a>';
    ul.appendChild(newLi);
    input.value = '';

    ul.addEventListener('click', (e) => {
        if(e.target.textContent === '[Delete]'){
            let a = e.target;
            let l = a.parentElement;
            l.remove();
        }
    })
}