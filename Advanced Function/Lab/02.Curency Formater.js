
let currencyFormatter = function (separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

let dollarFormatter = (function(currencyFormatter) {
    return function (value) {
        let separator = ',';
        let symbol = '$';
        let symbolFirst = true;
        currencyFormatter(separator, symbol, symbolFirst, value);
    }
})();

console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));  // $ 2,71