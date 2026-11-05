# BIC21203 Web Development - Lab 4a: Client-Side Scripting (JavaScript)

Name: Muhammad Haziq bin nazri
Student ID: AI240032

## Overview

3 small pages that use plain HTML5 and JavaScript (no libraries). Each uses an external
`script.js` loaded with `defer`, `addEventListener()` instead of inline `onclick`, and
`textContent` (never `innerHTML`) for text.

| Folder | Task                     | Key concepts                                                  |
| ------ | ------------------------ | ------------------------------------------------------------- |
| `q1/`  | Interactive Text Changer | DOM selection, function, click event                          |
| `q2/`  | Smart Number Validator   | `trim()`, regex check, `Number()`, if / else if / else        |
| `q3/`  | Dynamic Number Generator | `for` loop, `createElement`, `appendChild`, clearing the list |

## How to run

Open index.html in a desktop browser (double-click or right-click > Open with (selected browser)).

## Test cases

- Q1: load shows "Welcome to my website!"; click shows "Hello there!".
- Q2: `5` lower | `10` equal | `15` higher | `10.5` higher | `abc` invalid | empty / spaces invalid.
- Q3: click shows items 1-5; click again, still exactly 5 items.

## Screenshots

`q1` Before: ![alt text](image.png)
`q1` After: ![alt text](image-1.png)
`q2` Before: ![alt text](image-2.png)
`q2` Lower: ![alt text](image-3.png)
`q2` Higher: ![alt text](image-4.png)
`q2` Equal: ![alt text](image-7.png)
`q2` Invalid: ![alt text](image-8.png)
`q3` Before: ![alt text](image-5.png)
`q3` After: ![alt text](image-6.png)
