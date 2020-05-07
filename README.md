# Day Planner


This is a simple calendar application that allows the user to save events for each hour of the day. 

## User Story

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively.

## Business Context

Poor time management can result in missed meetings, deadlines, and create the appearance of unprofessionalism. A daily planner allows employees to see their day at a glance, schedule time effectively, and improve productivity.

## Planner works as follows: 

* The employee arrives at the landing page and is presented with a daily planner for the current date and with slots for stardard business hours (9 a.m. to 5 p.m.). Each time slot includes: 
    - time of day 
    - employee input field
    - save input button (icon)

* The employee adds an event to a specific hour in the calendar

* Clicking on the save button saves the event in the timeblock for that hour and stores the input in local storage to allow input to persist when the application is refreshed.

* Each time slot is color coded to indicate if the event is in the past, present, or future. Colors change to reflect the time of day.

![Daily Planner](assets/5-dailyPlanner.png?raw=true)

<!-- Refer to GIF below for an app demo. -->

<!-- ![Day Planner Demo](assets/5-dayPlannerDemo.gif) -->

<!-- Try it out at: https://fguzmanrs.github.io/4-codeQuiz/ -->

## Future version to include: 

* weekly view option
* day navigators (yesterday, tomorrow)