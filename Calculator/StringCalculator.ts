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

        const numArray = numbers.split(delimiter).map((num) => parseInt(num, 10));

        const negativeNumbers = numArray.filter((num) => num < 0);
        if (negativeNumbers.length > 0) {
            throw new Error(`negative numbers not allowed: ${negativeNumbers.join(', ')}`);
        }
    
        return numArray.reduce((sum, curr) => sum + curr, 0);
    }
}
