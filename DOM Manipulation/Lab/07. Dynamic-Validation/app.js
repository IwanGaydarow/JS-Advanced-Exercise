function validate() {
    let email = document.getElementById('email');
   // let timeout;

    email.addEventListener('change', (e) => {
        let validate = email.value;
        //clearTimeout(timeout);

       // timeout = setTimeout(function () {
            let reg = new RegExp('^[a-z]+@[a-z]+\\.[a-z]{2,}$');

        if(reg.test(validate)){
            email.classList.remove('error');
        } else {
            email.classList.add('error');
        }
       // }, 800);
    });
}