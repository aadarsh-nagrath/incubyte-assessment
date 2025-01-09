import { StringCalculator } from '../Calculator/StringCalculator';
describe('StringCalculator', () => {
    let calculator: StringCalculator;

    beforeEach(() => {
        calculator = new StringCalculator();
    });

    test('should return 0 for an empty string', () => {
        expect(calculator.add('')).toBe(0);
    });

    test('Calculator should return the number itself incase a single number input', () => {
        expect(calculator.add('5')).toBe(5);
    });

    test('should return the sum of two comma-separated numbers', () => {
        expect(calculator.add('1,2')).toBe(3);
    });

    test('Calculator should be handle newlines as delimiters', () => {
        expect(calculator.add('1\n2,3')).toBe(6);
    });

    test('should support custom delimiters', () => {
        expect(calculator.add('//;\n1;2')).toBe(3);
    });

    test('should throw an exception for negative numbers', () => {
        expect(() => calculator.add('1,-6')).toThrow('negative numbers not allowed: -6');
    });

    test('Calculator should ignore numbers greater than 1000', () => {
        expect(calculator.add('2,1001')).toBe(2);
    });
    
    test('should support multiple delimiters', () => {
        expect(calculator.add('//[***]\n1***2***3')).toBe(6);
    });
    
});