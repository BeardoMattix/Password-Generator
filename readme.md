# Week 3 Homework: Random Password Generator

## Description
For this assignment we were asked to create a random password generator that takes user inputs and creates a password. Users can choose the number of characters (8-132), and whether to include uppercase, lowercase, numbers, or special characters in their password. 

## Link to Deployed Site
![Random Password Generator](https://beardomattix.github.io/homework-week-3/"Random Password Generator")

## Process
This project required a lot of research to understand which steps I needed to take in order to get the password generator to function properly. I started by setting up the arrays for the user inputs, then declaring the variables for the confirmations. By doing this it allowed me to have a better understanding of the logic I would write later. 

I also wanted to create an alert in case a user didn't follow the parameters, wich I did by creating a while loop that alerts the user to choose at least one parameter if all of the parameters came back false. 

From there I set up the actions for a variable called passwordCharacters. This takes the user inputs and concats the designated strings and uses Math.floor and Math.random to select from the strings I created for the user input options. 

![Screen Shot 2021-06-21 at 1 59 14 PM](https://user-images.githubusercontent.com/82903201/122807690-e6dcee80-d299-11eb-9f24-b0f847213fda.png)
![Screen Shot 2021-06-21 at 1 59 30 PM](https://user-images.githubusercontent.com/82903201/122807694-e6dcee80-d299-11eb-87d4-ad128748e513.png)
![Screen Shot 2021-06-21 at 1 59 43 PM](https://user-images.githubusercontent.com/82903201/122807697-e7758500-d299-11eb-8a50-eca6bb60f685.png)
![Screen Shot 2021-06-21 at 1 59 57 PM](https://user-images.githubusercontent.com/82903201/122807698-e7758500-d299-11eb-8d06-c95f95f5db68.png)

## Problems Solved

* This project solves the problem of users creating passwords that are easy to break by randomizing the password and using a combination of upper and lower case letters, numbers, and special characters.
* This solves the problem of users coming up with an original password that will fit the parameters of websites with strict password requirements. 

