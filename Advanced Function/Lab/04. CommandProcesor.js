let firstZeroTest = (function(){
    let str = '';
    
    function append(input){
        str = str.concat(input);
    }

    function removeStart(n){
        str = str.substring(n);
    }

    function removeEnd(n){
        str = str.substring(0, str.length - n);
    }

    function print(){
        console.log(str);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
})();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();