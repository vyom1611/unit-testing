const chunkArray = require("./chunk");

//Check if function exists
test('reverseString function exists', () => {
    expect(chunkArray).toBeDefined();
});

test('Chunk an array of 6 values with the length 2', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const len = 2
    const chunkedArr = chunkArray(numbers, len)
    expect(chunkedArr).toEqual([[1,2], [3,4], [5,6]]);

})