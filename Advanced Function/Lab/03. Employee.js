function employees(data, criteria) {
    let dataParsed = JSON.parse(data);

    if (criteria === 'all') {
        dataParsed.forEach(element => {
            console.log(`${--(element.id)}. ${element.first_name} ${element.last_name} - ${element.email}`);
        });
    }
    else {
        let [propertyName, propValue] = criteria.split('-');
        let result = dataParsed.reduce((acc, value) => {

            if (value[propertyName] === propValue) {
                acc.push(`${value.first_name} ${value.last_name} - ${value.email}`);
            }

            return acc;
        }, []);

        for (let i = 0; i < result.length; i++) {
            console.log(`${i}. ${result[i]}`);
        }
    }
}

employees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson');