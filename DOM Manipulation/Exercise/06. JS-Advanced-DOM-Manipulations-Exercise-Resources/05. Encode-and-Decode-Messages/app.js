function encodeAndDecodeMessages() {
    let main = document.getElementById('main');
    let receiveArea = document.querySelector('main div + div textarea');


    main.addEventListener('click', (e) => {
        if (e.target.localName === 'button' && e.target.textContent === 'Encode and send it') {
            let textArea = e.target.previousElementSibling;
            let textValue = textArea.value;
            if(textValue !== ''){
                let unicodeText = '';

            for (let i = 0; i < textValue.length; i++) {
                let word = textValue.charCodeAt(i);
                word += 1;
                unicodeText += String.fromCharCode(word);
            }
            textArea.value = '';
            receiveArea.value = unicodeText;
            }
        } else if (e.target.localName === 'button' && e.target.textContent === 'Decode and read it') {
            let textForDecode = receiveArea.value;

            if (textForDecode !== '') {

                let decoded = '';

                for (let y = 0; y < textForDecode.length; y++) {
                    let word = textForDecode.charCodeAt(y);
                    word -= 1;
                    decoded += String.fromCharCode(word);
                }

                receiveArea.value = decoded;
            }
        }
    })
}