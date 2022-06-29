const functions = require('./functions');

test('Adds 2+2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);   //Checking if function returns the expected value
})

test('Adds 2+2 to NOT equal 10', () => {
    expect(functions.add(2, 2)).not.toBe(10);    //Testing if function is not returning the wrong value
})

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();    //Testing if function returns null
})

test('Should be falsy', () => {
    expect(functions.checkValue(0)).toBeFalsy();     //Testing if function returns falsy values (like: 0, undefined, null)
})                                                   //To check if function returns truthy value, add the .not after the function parameter


test('User should be Vyom Sharma object', () => {
    expect(functions.createUser()).toEqual({ firstName: 'Vyom', lastName: 'Sharma'});    //Checking if object is equal to expected output
})

test('Should be under 1600', () => {
    const num1= 200;
    const num2= 300;
    expect(num1 + num2).toBeLessThan(1600);    //Checking if calculated value from a function is less than a target number
})

test('Why am I here', () => {
    expect('here').not.toMatch(/I/);    //Regex expression
})

test('Apple should be in fruits array', () => {
    const fruits = ['orange','banana','pear','grape','apple','orange'];
    expect(fruits).toContain('apple');          //Checking if an array contains a specific element
})


//Asynchronous data
test('Title should be "delectus aut autem"', () => {
    expect.assertions(1);   //This statement is to verify that an assertion( promise callback like .then) is actually called
    return functions.fetchUser()
        .then(data => expect(data.title).toEqual('delectus aut autem'))     //This .then is so that the test runs after the callback to the API is made
})