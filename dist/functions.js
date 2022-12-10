"use strict";
function add(a, b) {
    return a + b;
}
;
console.log(add(2, 3));
//ou
const adicao = (a, b) => a + b;
console.log(adicao(4, 4));
//com parametros
//O ? deixa o parâmetro opcional
const addWithOptionalTax = function (a, b, tax) {
    if (typeof tax != 'undefined') {
        return (a + b) - tax;
    }
    return a + b;
};
console.log(addWithOptionalTax(10, 4, 1));
console.log(addWithOptionalTax(10, 4));
//com valor default
const applyDiscount = (price, percent = 5) => price - (price * (percent / 100));
console.log(applyDiscount(100, 25));
//rest parameter 
const calcTotal = (...numbers) => {
    let total = 0;
    numbers.forEach(num => {
        return total += num;
    });
    return total;
};
console.log(calcTotal(1, 2, 3, 4));
