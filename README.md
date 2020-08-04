# Homework 5 Day Planner

Homework for Week 5

## Introduction

An employee with a busy schedule reached out to me as a junior developer to develop a simple calendar application that would allow the user to save events for each hour of the day. The main use for this app would be to keep track of important events on a daily planner so that the user can manage their time more effectively.

My motivation for taking on this project was to test my knowledge and skills on jQuery and local storage. One of the hardest tasks I ran into was getting the web page to save to local storage and pulling the information.

## Usage

When the user first enters the webpage, this is what they will see.

The user can input text into the time blocks for the given hour.

The timeblocks will change color depending on if the hour is in the past, present or future.

The user can hit save and save the changes made to the planner.

When the user refreshes, the changes will save.


## How I Coded the App

The aesthetics for the web page application was already preset for me. I used a forEach loop to create rows for each of the hours. Inside the rows, they would contain a column for the hours, an area to input text, and a save button. Once I got the rows setup how I wanted, I used moment.js to display the date on the top of the planner. I also used moment.js to change the color of the row time block to a different color depending on if the event was in the past (grey), present (red) or future (green). Once I got the rows and the colors to change depending on the time of day, I got a click event to save to local storage.