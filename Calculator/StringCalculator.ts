export class StringCalculator {
    public add(numbers: string): number {
        if (numbers === '') {
            return 0;
        }

        let delimiter = /,|\n/;
        if (numbers.startsWith('//')) {
            const delimiterEnd = numbers.indexOf('\n');
            delimiter = new RegExp(numbers.substring(2, delimiterEnd));
            numbers = numbers.substring(delimiterEnd + 1);
        }

        return numbers.split(delimiter).map((num)=> parseInt(num, 10)).reduce((a, b) => a + b);
    }
}
