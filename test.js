const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});


//from EurotoDollar
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5);

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(dollars);
})



//from DollartoYen
test("1 dollar is equivalent 127.9 yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // use the function like its suppoed to be used
    const yen = fromDollarToYen(1);

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 127.9; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(yen);
})



//from YentoPound
test("Thousan Yen should be 9.8 pounds", function(){
    //import the function from app.js
    const { fromYentoPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pound = fromYentoPound(1000);

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 9.8; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(pound);
})