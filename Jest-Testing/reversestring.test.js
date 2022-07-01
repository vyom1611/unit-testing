const reverseString = require('./reversestring');


//Check if function exists
test('reverseString function exists', () => {
    expect(reverseString).toBeDefined();
});

test('String reverses', () => {                                 //Checking if string was reversed
    expect(reverseString('hello')).toEqual('olleh');
})