const { add } = require('./stringCalculator');

// Test for an empty string
describe('check add function',()=>{
    test('should return 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });
})
