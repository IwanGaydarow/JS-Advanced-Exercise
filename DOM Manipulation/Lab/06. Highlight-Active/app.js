function focus() {
    let divContainer = document.querySelector('body div');

    divContainer.addEventListener('focus', (e) => {
        let div;
        if (e.target.localName === 'input') {
            div = e.target.parentElement;
            div.classList.add('focused');
        

        e.target.addEventListener('blur', () => {
            div.classList.remove('focused');
        })
    }
    })
}