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
});