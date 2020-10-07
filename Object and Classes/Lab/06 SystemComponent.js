function systemComponent(input) {
    let systemDb = input.reduce((acc, value) => {
        let [system, component, subComponent] = value.split('|').map(x => x.trim());

        if (!acc[system]) {
            acc[system] = { [component]: [subComponent] };
        }
        else if (!acc[system][component]) {
            acc[system][component] = [subComponent];
        }
        else {
            acc[system][component] = [...acc[system][component], subComponent]
        }

        return acc;

    }, {})

    let sortedSystem = Object.entries(systemDb).sort((a, b) => {
        if (Object.keys(a[1]).length !== Object.keys(b[1].length)) {
            return Object.keys(b[1]).length - Object.keys(a[1]).length;
        }

        return a[0].localeCompare(b[0]);
        
    });

    console.log(sortedSystem);

    /*
    if(Object.keys(systemDb[a]).length !== Object.keys(systemDb[b]).length){
            return Object.keys(systemDb[b[0]]).lenght - Object.keys(systemDb[a]).lenght;
        }

        return a.localeCompare(b);
    */

    sortedSystem.forEach(element => {
        console.log(element[0]);
        Object.keys(element[1]).forEach(el => {
            console.log(`|||${el}`);
            element[1][el].map(x => {
                console.log(`||||||${x}`);
            })
        })
    });
}



systemComponent(
    [
        'SULS | Main Site | Home Page',
        'SULS | Main Site | Login Page',
        'SULS | Main Site | Register Page',
        'SULS | Judge Site | Login Page',
        'SULS | Judge Site | Submittion Page',
        'Lambda | CoreA | A23',
        'SULS | Digital Site | Login Page',
        'Lambda | CoreB | B24',
        'Lambda | CoreA | A24',
        'Lambda | CoreA | A25',
        'Lambda | CoreC | C4',
        'Indice | Session | Default Storage',
        'Indice | Session | Default Security'
    ]);