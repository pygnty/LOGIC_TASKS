// 4. Задача на замыкания. Реализовать функцию, которая будет при каждом вызове 
// и передаче строкового значения конкатенировать строку используя скоуп замыкания,
// а после вызова ее без параметров выдать результат. 

function scopeClosureConcat() {
    var string = "";
    function addString(str = null) {
        if (str) {
            string += str;
            return;
        }
        str = string;
        string = '';
        return str;
    }
    return addString;
}

// let concat = scopeClosureConcat();
// concat('string ');
// concat('andersen');
// console.log(concat())
// concat('ababa');
// let concat2 = scopeClosureConcat();
// concat2('amogus');
// console.log(concat());
// console.log(concat2());