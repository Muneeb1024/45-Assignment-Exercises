// Q:29 
import chalk from "chalk";
//creating an array
let favouriteFruits = ["starawberry", "banana", "watermelon"];
//using 5 independent if statements
if (favouriteFruits.includes("starawberry")) {
    console.log(chalk.red.bold("\nI really like starawberry."));
}
if (favouriteFruits.includes("banana")) {
    console.log(chalk.yellow.bold("\nI really like banana."));
}
if (favouriteFruits.includes("orange")) {
    console.log(chalk.green.bold("I really like orange."));
}
if (favouriteFruits.includes("watermelon")) {
    console.log(chalk.green.bold("\nI really like watermelon.\n"));
}
if (favouriteFruits.includes("grapes")) {
    console.log(("I really like grapes."));
}
