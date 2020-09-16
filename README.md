# Fitlit

> A Front-End Project by [Bret Merritt](https://github.com/bretm9) & [Caleb Cyphers](https://github.com/CalebCyphers)
---
## Contents
1. [Overview and Goals](#overview)
1. [Technologies](#technologies)
1. [Design](#design)
1. [Widgets](#widgets)
1. [Challenges](#challenges)
1. [Successes](#successes)
---

## Overview
We are Front-End students at the Turing School of Software and Design. This project was our paired project for Module 2, and was built with a focus on learning how to use object and array prototype methods to perform data manipulation on large datasets.

### Abstract
This app is an activity tracker that offers a look into the user's health data for a given week. It displays activity, hydration, and sleep data. There are in depth insights for the current day, as well as several graphs visualizing weekly data. There is also a section to vew the global average activity of all users for the current day. 

### Goals

* Gaining a better understanding of ES6 and test-driven-design. 
* Learning to translate original composition into a website
* Getting comfortable with array prototype methods
* Working with large datasets

---

 ## Technologies

  - HTML
  - CSS
  - JavaScript
  - Mocha & Chai
  - MomentJS
  - ChartJS
  - Git
  - Lint

> [Back to the top](#fitlit)
---

## Design

  Our layout Is based on common activity tracking apps. We organized categories by what we thought the most useful data was, keeping the high priority data at the top.
  We specifically took inspiration from popular sleep apps to create a calm design, while using pops of color to keep the app lively. 

> [Back to Features](#features)

## Widgets

### Activity
  The Activity section contains a card for today's activity which includes:
    * Whether step goal has been met
    * Total steps today
    * Total minutes active today
    * Flights of Stairs climbed today
    * Miles Walked today.

  It also shows the global averages for common activities to crosscheck your progress!

  Also included in the Activity section is a weekly view of the user's steps. This line graph illustrates how user's steps fluxuate throughout the week.
  Next to the weekly graph is the minutes active and flights of stairs climbed each day in the week.

### Hydration
  The Hydration section contains two cards:
    * A card for the current day, which indicates the number of ounces drank today.
    * A card for the week, which holds a weekly line graph that visualized all the ounces drank throughout the week.

### Sleep
  The Sleep section contains three cards:
    * A card for the current day, displaying the hours slept that day and the sleep quality
    * A card for the week, displaying a line graph to illustrate the change in hours slept per day throughout the week.
    * A card for the user's average hours slept and average sleep quality for all time.

> [Back to Features](#features)

---
 ## Challenges  
 
 We faced some difficulties in importing npm packages into our project while keeping browser compatibility. Along the same lines, ran into some errors while attempting to instatiate data objects within data repository classes due to the way the browser compiles all the files into one global scope.
 
> [Back to the top](#fitlit)

---
 ## Successes
 
We managed to overcome the browser issues we faced and successfully import npm packages to properly manipulate our data and display nicely on the page. A big win for us was when we finally were displaying weekly data for a user's sleep data existing in a repository. This project really managed to make us to wrap our heads around how iterator methods can efficiently manipulate data.
  
> [Back to the top](#fitlit)
 ---
