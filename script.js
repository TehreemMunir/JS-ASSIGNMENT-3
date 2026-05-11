// 1. Declare age and display in alert
var age = 13;
alert("I am " + age + " years old");

// 2. Track site visits (Standard practice for this task)
// Note: Real tracking uses localStorage, but for this assignment, we use a variable.
var visitCount = 14;
document.write("You have visited this site " + visitCount + " times.<br>");

// 3. Declare birthYear and display in browser
var birthYear = 2013;
document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared variable is " + typeof (birthYear) + "<br><br>");

// 4. Online Clothing Store Scenario
var visitorName = "Hajirah Fatima";
var productTitle = "shoes";
var quantity = 5;

// Displaying the order summary
document.write("<b>" + visitorName + "</b> ordered <b>" + quantity + " " + productTitle + "</b>(s) on XYZ Clothing store.");