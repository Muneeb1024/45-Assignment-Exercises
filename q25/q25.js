// Q:25  
import chalk from "chalk";
//define variable
let alien_color = "blue";
// alien_color = "purple";
//if statement
if (alien_color === "blue") {
    console.log(chalk.green.bold("\nPlayer just earned 5 points\n"));
}
if (alien_color === "purple") {
    console.log(chalk.green.bold("\nPlayer just earned 10 points\n"));
}
