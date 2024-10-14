const { add } = require('./stringCalculator');

// Test for an empty string
describe('check add function',()=>{
    test('should return 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });

    // Test for a single number
    test('should return the number itself for a single number string', () => {
        expect(add("1")).toBe(1);
    });

    // Test for two numbers
    test('should return the sum of two numbers separated by a comma', () => {
        expect(add("1,2")).toBe(3);
    });

})

