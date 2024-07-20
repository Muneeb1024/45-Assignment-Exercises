// Q:27 
import chalk from "chalk";
//version 1
//define variable
let aliencolor = "green";
//using if and else if statements
if (aliencolor === "green") {
    console.log(chalk.green.bold("\n(version 1)you shot green alien so you just earned 5 points\n"));
}
else if (aliencolor === "yellow") {
    console.log(chalk.green.bold("you shot yellow alien so you just earned 10 points"));
}
else {
    console.log(chalk.green.bold("you shot red alien so you just earned 15 points"));
}
//version 2
let aliencolor1 = "yellow";
if (aliencolor1 === "green") {
    console.log("you shot green alien so you just earned 5 points");
}
else if (aliencolor1 === "yellow") {
    console.log(chalk.green.bold("\n(version 2)you shot yellow alien so you just earned 10 points\n"));
}
else if (aliencolor1 === "red") {
    console.log("you shot red alien so you just earned 15 points");
}
//version 3
let aliencolor2 = "red";
if (aliencolor2 === "yellow") {
    console.log("you shot yellow alien so you just earned 10 points");
}
else if (aliencolor2 === "green") {
    console.log("you shot green alien so you just earned 5 points");
}
else if (aliencolor2 === "red") {
    console.log(chalk.green.bold("\n(version 3) you shot red alien so you just earned 15 points\n"));
}
;
