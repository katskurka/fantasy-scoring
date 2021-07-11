# Fantasy Scoring

## Instructions
In the initial commit to this project, you have been provided with a basic project setup as well as a set of tests which currently fail. Your task is to create a `calculateScore` function which will properly calculate the fantasy score for all known positions, returning 0 when the position is not one of the ones laid out below.

Working in a branch called `answer`, implement your function to get your tests to pass. Once you are done, push your branch up to GitHub, create a pull request, and request review from the instructor.

## Scoring Rules
* **QB:** 1 point for every 25 yards passing, 6 points for every passing touchdown, -3 points for every interception, 1 point for every 10 yards rushing, 6 points for every rushing touchdown, -3 points for every rushing fumble
* **RB:** 1 point for every 10 yards rushing, 6 points for every rushing touchdown, -3 points for every rushing fumble, 1 point for every reception, 1 point for every 10 yards receiving, 6 points for every receiving touchdown, -3 points for every receiving fumble, 1 point for every 15 kick return yards, 6 points for every kick return touchdown, -3 points for every kick return fumble, 1 point for every 15 punt return yards, 6 points for every punt return touchdown, -3 points for every punt return fumble
* **WR:** 1 point for every 10 yards rushing, 6 points for every rushing touchdown, -3 points for every rushing fumble, 1 point for every reception, 1 point for every 10 yards receiving, 6 points for every receiving touchdown, -3 points for every receiving fumble, 1 point for every 15 kick return yards, 6 points for every kick return touchdown, -3 points for every kick return fumble, 1 point for every 15 punt return yards, 6 points for every punt return touchdown, -3 points for every punt return fumble
* **TE:** 1 point for every reception, 1 point for every 10 yards receiving, 6 points for every receiving touchdown, -3 points for every receiving fumble

## Question Answers

* **what repo project does and the impact it has:** This repo is an exercise in writing a javascript program to successfully pass a set of provided tests to practice TDD
* **Technologies:** JavaScript, TDD, ESLint, Mocha, Chai
* **Author(s):** Kat Skurka
* **Credits:** Standy Merizier, Mohamed Hafez, Sherron Tynan for brainstorming together how to begin and pass the first test
* **Identify the component of this assignment you did best on, and why:** Making the initial functions to calculate the player scores based on the provided score key
* **Describe what problem this assignment was posing, and what your solution was to it:** I was having trouble refactoring the code to be more elegant, specifically changing the if/else statement to a switch statement. My solution was to research switch statements as I realized my understanding of them could use improving and then writing the switch statement a couple different ways to achieve the results I was looking for
* **What was your approach or process:** I began this project by brainstorming with the credited people. We initially broke down the project to determine the process we would move forward with to attempt to solve it. We started by solving the easiest of the test to pass (return 0 by default), then began building out the necessary pieces of info we would have to include in the first player score function. Included an if/else statement to initially pass all the tests. Solo, I built out all the other player position scores using the provided score key. I then decided to attempt to refactor the code to make it cleaner to read and tweaked it until I was able to achieve another passing test for all the test scenarios.
* **What were your challenges:** I was having trouble refactoring the if/else statement into a switch statement
* **What resources did you use:** javascript.info, MDN guides, JavaScript: the Definitive Guide

