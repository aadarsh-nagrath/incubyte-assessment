# Assignment: Test-Driven Development (TDD) Assessment

## Overview
This assessment focuses on evaluating software craftsmanship skills through a **Test-Driven Development (TDD)** approach. The aim is to showcase the ability to write **readable** and **testable code** while demonstrating iterative code development with **frequent commits**.

### Assignment Link
[Incubyte TDD Assessment](https://blog.incubyte.co/blog/tdd-assessment/)

---

## Steps to Run Tests
To execute the tests, use the following command:
```bash
npm run test
```

---

## Approach to the Assignment with TDD Development

## Steps to approach the assignment with TDD development:

1. **Understand the problem**

2. **Test -**  
   It's vital for an empty string in the calculator should return 0.  
   **Code -**  
   Adding a simple check if str == '' then to return 0

3. **Test -**  
   It should return the number itself for a single number input in the calculator.  
   **Code -**  
   Added a check to see if string includes a "," or not, if not then it is supposed to be a single number and return the number.

4. **Test -**  
   It should return the sum of two numbers in the calculator, that are separated by a comma.  
   **Code -**  
   Changed return statement to first split the string by "," and then parse the integers and return the sum.

5. **Test -**  
   It should handle newlines as delimiters.  
   **Code -**  
   Added a delimiter based on which the string is split, it has both "," % "\n". Will check for both.

6. **Test -**  
   Calculator should support custom delimiters.  
   **Code -**  
   Added a code checks if the input string numbers starts with // (indicating a custom delimiter), extracts the delimiter, and updates the numbers string by removing the delimiter definition.

7. **Test -**  
   Throw an exception if negative numbers are passed to calculator.  
   **Code -**  
   Now will split the numbers based on delimiter first and then check if any of the numbers are negative. If yes will throw exception, if not then processed with returning sum.

8. **Test -**  
   Need to handle numbers greater than 1000.  
   **Code -**  
   Added a filter to check if the number is greater than 1000 and if yes then ignore it.

9. **Test -**  
   Need to handle multiple custom delimiters.  
   **Code -**  
   I added an escapeRegex function to safely handle special characters in delimiters and modified the delimiter parsing logic to support multiple custom delimiters by splitting, escaping, and combining them into a single regex pattern.  
   Also more tests added to handle different scenarios.
