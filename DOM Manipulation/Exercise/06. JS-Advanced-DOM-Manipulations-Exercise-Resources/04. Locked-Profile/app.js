function lockedProfile() {
    let main = document.getElementById('main');

    main.addEventListener('click', (e) => {
        if (e.target.localName === 'button' && e.y < 400) {
            let shwoBtn = e.target;
            let profile = e.target.parentElement;
            let div = profile.querySelector('div');

            let inputs = Array.from(profile.getElementsByTagName('input'));
            let radio = inputs.filter(x => x.getAttribute('type') === 'radio');
            for (let i = 0; i < radio.length; i++) {
                if (radio[i].checked && radio[i].value === 'unlock') {
                    div.style.display = 'block';
                    shwoBtn.textContent = 'Hide it';
                }
            }

            shwoBtn.addEventListener('click', (e) => {
                for (let i = 0; i < radio.length; i++) {
                    if (radio[i].checked && radio[i].value === 'unlock') {
                        div.style.display = 'none';
                        shwoBtn.textContent = 'Show more';
                    }
                }
            });
        }
    });
}