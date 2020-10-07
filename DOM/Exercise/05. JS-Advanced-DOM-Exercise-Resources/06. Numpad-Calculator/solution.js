function solve() {
    let keyPad = document.getElementsByClassName('keys')[0];
    let expOutput = document.getElementById('expressionOutput');
    let resultOutput = document.getElementById('resultOutput');
    let clearBtn = document.getElementsByClassName('clear')[0];

    clearBtn.addEventListener('click', () => {
        expOutput.textContent = '';
        resultOutput.textContent = '';
    })

    let operators = {
        '+': '+',
        '-': '-',
        '/': '/',
        '*': '*'
    }

    let operations = {
        '+': (num1, num2) => num1 + num2,
        '-': (num1, num2) => num1 + num2,
        '/': (num1, num2) => num1 / num2,
        '*': (num1, num2) => num1 * num2
    }

    keyPad.addEventListener('click', ({ target: { value } }) => {
        if (!value) {
            return;
        }
        let curExp = expOutput.textContent;

        if (value === '=') {
            let exp = curExp.split(' ');

            if(exp.length < 3 || exp[2] === ''){
                resultOutput.textContent = 'NaN';
            } else {
                let first = exp[0]++;
                let second = exp[2]++;

                resultOutput.textContent = operations[exp[1]](first, second);
            }
            
            return;
        }


        if (operators[value]) {
            expOutput.textContent = curExp + ` ${operators[value]} `;
        } else {
            expOutput.textContent = curExp + value;
        }
    })
}