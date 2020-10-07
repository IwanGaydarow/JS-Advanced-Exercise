let salution = (function () {
    let add = function (x, y) {
        return [x[0] + y[0], y[1] + x[1]];
    };

    let multiply = function (vec, n){
        return [(vec[0]) * n, (vec[1]) * n];
    }

    let length = function (vec){
        return (Math.sqrt((Math.pow(vec[0], 2) + Math.pow(vec[1], 2))));
    }

    let dot = function (x, y){
        return ((x[0] * y[0]) + (x[1] * y[1]));
    }

    let cross = function (x, y){
        return (x[0] * y[1] - x[1] * y[0]);
    }

    return {
        add,
        multiply,
        length,
        dot,
        cross
    }
})();

console.log(salution.dot([2, 3], [2, -1]));