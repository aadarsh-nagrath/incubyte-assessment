export class StringCalculator {
    public add(numbers: string): number {
        if (numbers === '') {
            return 0;
        }

        const delimiter = /,|\n/;

        return numbers.split(delimiter).map((num)=> parseInt(num, 10)).reduce((a, b) => a + b);
    }
}
