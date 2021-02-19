// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))


const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // returnamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen = valueInDollar * 127.9;
    // returnamos el valor
    return valueInYen;
}

//comment
const fromYentoPound = function(valueInYen){
    // convertimos el valor a dolares
    let valueInDollar = valueInYen / 127.9;
    let valueInPound= valueInDollar/0.8;
    var rounded = Math.round(valueInPound * 10) / 10
    // returnamos el valor
    return rounded;
}

console.log(fromYentoPound(1000))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum,fromEuroToDollar, fromDollarToYen, fromYentoPound};

//console.log ("Hello World");