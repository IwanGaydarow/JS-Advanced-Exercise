function deleteByEmail() {
    let mail = document.querySelector('label input').value;
    let td = document.querySelectorAll('#customers td');
    let result = document.getElementById('result');

    let cell = Array.from(td).find(x => x.textContent.includes(mail));
    
    if(cell){
    let tr = cell.parentElement;
    result.textContent = 'Deleted.';
    tr.remove();
    } else {
        result.textContent = 'Not found.';
    }
}