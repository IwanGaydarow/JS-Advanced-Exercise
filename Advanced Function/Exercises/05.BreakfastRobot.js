() => {
    let elements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let recipei = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }

    return function management(input) {
        let [action, name, quant] = input.split(' ');

        if (action === 'report') {
            console.log(`protein=${elements.protein} carbohydrate=${elements.carbohydrate} fat=${elements.fat} flavour=${elements.flavour}`);
        }
        else if (action === 'restock') {
            elements[name] += +quant;

            console.log('Success');
        }
        else {
            let neededIngr = recipei[name];
            let isEnough = true;
            let notEn = '';

            for (const key in neededIngr) {
                if (neededIngr[key] * +quant > elements[key]) {
                    isEnough = false;
                    notEn = key;
                    break;
                }
            }

            if (!isEnough) {
                console.log(`Error: not enough ${notEn} in stock`);
            }
            else {
                for (const en in neededIngr) {
                    elements[en] -= neededIngr[en];
                }

                console.log('Success');
            }
        }
    }
};


manager('restock flavour 50');