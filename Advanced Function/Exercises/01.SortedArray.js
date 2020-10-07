function sort(...input) {
    let result = input.reduce((acc, value) => {
        let type = typeof (value);
        console.log(type === 'object' ? `${type}:` : `${type}: ${value}`);

        if (type === 'object') {
            Object.values(value).forEach(el => type = typeof (el));
        }

        if (!acc[type]) {
            acc[type] = 1;
        } else {
            acc[type]++;
        }

        return acc;
    }, {});

    Object.entries(result).sort((a, b) => {
        return b[1] - a[1];
    }).forEach(el => console.log((`${el[0]} = ${el[1]}`)));
}

sort({ name: 'bob' }, 3.333, 9.999);