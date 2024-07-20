// Q:28 
import chalk from "chalk";
//create a variable
let age = 18;
//creating a program of stages of life using if else chain
//step 1
if (age < 2) {
    console.log(chalk.blue.bold("\nYou are a Baby\n"));
}
//step 2
else if (age >= 2 && age < 4) {
    console.log(chalk.blue.bold("You are a Toddler\n"));
}
//step 3
else if (age >= 4 && age < 13) {
    console.log(chalk.blue.bold("You are a kid\n"));
}
//step 4
else if (age >= 13 && age < 20) {
    console.log(chalk.green.bold("\nYou are a teenager.\n"));
}
//step 5
else if (age >= 20 && age < 65) {
    console.log(chalk.blue.bold("You are an adult"));
}
else if (age >= 65) {
    console.log(chalk.red.bold("You are an elder"));
}
