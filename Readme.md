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

Steps to approach the assignment with TDD developement:
1. Understand the problem
2. 
Test - 
Its vital for an empty string in the calculator should return 0. 
Code -
Adding a simple check if str == '' then to return 0
3. It should return the number itself for a single number input in the calculator.
Code - 
Added a check to see if string includes a "," or not, if not then it is supposed to be a single number and return the number.
4. It should return the sum of two numbers in the calculator, that are separated by a comma.
Code -
Changeded return statement to first split the string by "," and then pasrse the integers and return the sum.
5. It should handle newlines as delimiters
