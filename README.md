# Homework 5 Day Planner

Homework for Week 5

## Introduction

An employee with a busy schedule reached out to me as a junior developer to develop a simple calendar application that would allow the user to save events for each hour of the day. The main use for this app would be to keep track of important events on a daily planner so that the user can manage their time more effectively.

My motivation for taking on this project was to test my knowledge and skills on jQuery and local storage. One of the hardest tasks I ran into was getting the web page to save to local storage and pulling the information.

## Usage

When the user first enters the webpage, this is what they will see.
![Start of the Day with Green Hour Blocks and No Text](https://github.com/falbuna/Homework_5_DayPlanner/blob/master/Assets/StartOfDay.PNG)

The user can input text into the time blocks for the given hour.

The timeblocks will change color depending on if the hour is in the past, present or future.
![Added text and color changing depending on the hour of the day.](https://github.com/falbuna/Homework_5_DayPlanner/tree/master/MiddleOfDay.PNG)

The user can hit save and save the changes made to the planner.

![End of Day with All hours in gray.](https://github.com/falbuna/Homework_5_DayPlanner/blob/master/Assets/EndOfDay.PNG)

When the user refreshes, the changes will save.


## How I Coded the App

The aesthetics for the web page application was already preset for me. I used a forEach loop to create rows for each of the hours. Inside the rows, they would contain a column for the hours, an area to input text, and a save button. Once I got the rows setup how I wanted, I used moment.js to display the date on the top of the planner. I also used moment.js to change the color of the row time block to a different color depending on if the event was in the past (grey), present (red) or future (green). Once I got the rows and the colors to change depending on the time of day, I got a click event to save to local storage. Then once it saved to local storage, I was able to get the text to stay on the page when the page is reloaded.

## Acknowledgements

I wanted to thank my Instructor Chris Stead for helping me get the hour rows created and Steven Landgraf for helping me when I was stuck on saving and pulling from local storage.