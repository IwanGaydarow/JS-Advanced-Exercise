function car(input) {
    let result = input.reduce((acc, value) => {
        let [brand, model, produced] = value.split('|').map(x => x.trim());

        if(!acc[brand]){
            acc[brand] = [{[model]: +produced}];
        }else if(acc[brand].find(x => x[model] !== undefined)){
            let indexOfCar = acc[brand].findIndex(x => x[model]);

            acc[brand][indexOfCar][model] += +produced;
        }else{
            acc[brand] = [...acc[brand], {[model]: +produced}];
        }


        return acc;
    }, {});

    Object.keys(result).map(x => {
        console.log(x);

        result[x].map(model => {
            Object.keys(model).map(y => {
                console.log(`###${y} -> ${model[y]}`);
            })
        })
    });
}

car(
    [
        'Audi | Q7 | 1000',
        'Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10'
    ]);