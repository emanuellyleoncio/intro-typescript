function add(a:number, b:number): number {
    return a + b;
};

console.log(add(2, 3));

//ou

const adicao = (a:number, b:number): number => a + b;
console.log(adicao(4, 4));

//com parametros
//O ? deixa o parâmetro opcional
const addWithOptionalTax = function (a:number, b:number, tax?:number): number {
    if(typeof tax != 'undefined') {
        return (a + b) - tax;
    }

    return a + b;
    
};
console.log(addWithOptionalTax(10, 4, 1));
console.log(addWithOptionalTax(10, 4));

//com valor default
const applyDiscount = (price:number, percent:number = 5): number => price - (price * (percent/100));

console.log(applyDiscount(100, 25));

//rest parameter 
const calcTotal = (...numbers: number[]): number => {
    let total = 0;
    numbers.forEach(num => {
        return total += num;
    })
    return total;
}

console.log(calcTotal(1, 2, 3, 4));
