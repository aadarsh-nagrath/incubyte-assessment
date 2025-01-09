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
![{3BD2E3F0-57FA-4499-A888-B2B5E2B6A7CB}](https://github.com/user-attachments/assets/0f74891d-83eb-4e73-b98d-8ba8b34969c4)

3. **Test -**  
   It should return the number itself for a single number input in the calculator.  
   **Code -**  
   Added a check to see if string includes a "," or not, if not then it is supposed to be a single number and return the number.
![{89BCCB58-6B62-4228-BB41-05A01B00DE8F}](https://github.com/user-attachments/assets/a24d4629-cc01-4bfa-aae8-8589bbff7f7a)

4. **Test -**  
   It should return the sum of two numbers in the calculator, that are separated by a comma.  
   **Code -**  
   Changed return statement to first split the string by "," and then parse the integers and return the sum.
![{BC470C07-8E8A-42EE-98A2-902B87CBDC14}](https://github.com/user-attachments/assets/0e9a7b0d-ffa8-415e-80df-70e40903e4a3)

5. **Test -**  
   It should handle newlines as delimiters.  
   **Code -**  
   Added a delimiter based on which the string is split, it has both "," % "\n". Will check for both.
![{2BE4F8D1-38B6-4015-9EAA-4D7A4DDB4CFC}](https://github.com/user-attachments/assets/f161371d-29d9-406a-bc25-749311c13f3a)

6. **Test -**  
   Calculator should support custom delimiters.  
   **Code -**  
   Added a code checks if the input string numbers starts with // (indicating a custom delimiter), extracts the delimiter, and updates the numbers string by removing the delimiter definition.
![{39AF6ACB-3745-4EF2-ACC8-79A5208D949E}](https://github.com/user-attachments/assets/6340e01f-a5a9-4247-b3bf-884938fb8d54)

7. **Test -**  
   Throw an exception if negative numbers are passed to calculator.  
   **Code -**  
   Now will split the numbers based on delimiter first and then check if any of the numbers are negative. If yes will throw exception, if not then processed with returning sum.
![{E6F14453-1638-4AE6-8F7D-5FD2EF1D7D05}](https://github.com/user-attachments/assets/7ef56541-d09d-4ba1-825a-3a5c447f8d04)

8. **Test -**  
   Need to handle numbers greater than 1000.  
   **Code -**  
   Added a filter to check if the number is greater than 1000 and if yes then ignore it.
![{28231C9A-4C49-45CA-9589-081E962A67DB}](https://github.com/user-attachments/assets/c503a247-c073-41ec-a4c4-962380d649bc)

9. **Test -**  
   Need to handle multiple custom delimiters.  
   **Code -**  
   I added an escapeRegex function to safely handle special characters in delimiters and modified the delimiter parsing logic to support multiple custom delimiters by splitting, escaping, and combining them into a single regex pattern.  
   Also more tests added to handle different scenarios.
![{89209DA0-5B89-4B84-BE80-6106CAB9BA39}](https://github.com/user-attachments/assets/3f669ad4-bef7-48ac-9127-9e7fcaf539b1)
