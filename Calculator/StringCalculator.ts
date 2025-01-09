export class StringCalculator {
    public add(numbers: string): number {
        if (numbers === '') {
            return 0;
        }

        function escapeRegex(delimiter: string): string {
            const specialCharacters = ['.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\', '^', '$', '#', '-', '/'];
            return delimiter.split('').map(char => {
                return specialCharacters.includes(char) ? `\\${char}` : char;
            }).join('');
        }

        let delimiter = /,|\n/;
        if (numbers.startsWith('//[')) {
            const delimiterEnd = numbers.indexOf('\n');
            const delimiterString = numbers.substring(3, delimiterEnd - 1);

            if (!delimiterString) {
                throw new Error('Invalid delimiter');
            }
        
            const delimiters = delimiterString.split('][')
                .map((delim) => escapeRegex(delim)); 
            delimiter = new RegExp(delimiters.join('|')); 
            numbers = numbers.substring(delimiterEnd + 1);
        }
        
        // if string starts with a custom delimiter
        else if (numbers.startsWith('//')) {
            const delimiterEnd = numbers.indexOf('\n');
            const customDelimiter = numbers.substring(2, delimiterEnd); 
            delimiter = new RegExp(escapeRegex(customDelimiter));
            numbers = numbers.substring(delimiterEnd + 1);
        }

        const numArray = numbers.split(delimiter).map((num) => parseInt(num, 10));

        const negativeNumbers = numArray.filter((num) => num < 0);
        if (negativeNumbers.length > 0) {
            throw new Error(`negative numbers not allowed: ${negativeNumbers.join(', ')}`);
        }
    
        return numArray.filter((num) => num <= 1000).reduce((sum, curr) => sum + curr, 0);
    }
}
