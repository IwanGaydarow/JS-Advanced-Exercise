function personBMI(...args) {
    function statusCalc(bmiValue) {
        let result = '';

        if(bmiValue < 18.5){
                result = 'underweight';
        }
        else if(bmiValue < 25){
            result = 'normal';
        }
        else if(bmiValue < 30){
            result = 'overweight';
        }
        else{
            result = 'obese';
        }
        
        return result;
    };
    
    let result = (function () {
        let [name, age, weight, height] = args;

        let bmi = weight / Math.pow((height / 100), 2);
        let status = statusCalc(bmi);

        return {
            'name': name,
            'personalInfo': {
                'age': age,
                'weight': weight,
                'height': height
            },
            'BMI': Math.round(bmi),
            'status': status
        }
    })();

    if(result.status === 'obese'){
        result['recommendation'] = 'admission required';
    }

    return result;
};

personBMI('Peter', 29, 75, 182);