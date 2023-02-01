# 05 Third-Party APIs: Work Day Scheduler

## Description

This simple work day calendar allows you to schedule and save specific events from 9 AM to 5 PM. These events are logged in the local storage then set in the corresponding time block. Day.js is used to provide the current date and time, and the time blocks change color based on the current hour. It does this by parsing the integers of the time block and the current hour, and compares those values to provide the color. 