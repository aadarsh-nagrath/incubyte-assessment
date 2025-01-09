export class StringCalculator {
    public add(numbers: string): number {
        if (numbers === '') {
            return 0;
        }

        if (!numbers.includes(',')) {
            return parseInt(numbers, 10);
        }

        return numbers.split(',').map((num)=> parseInt(num, 10)).reduce((a, b) => a + b);
    }
}
