// Q:34 
import chalk from "chalk";
//creating an array
let pizzas = ["Fajita", "Cheese", "Tikka", "Green boti", "Bihari boti"];
//using for-loop
for (let wonpizza of pizzas) {
    console.log(chalk.green.bold(`\nI like ${wonpizza} pizza.`));
}
;
// // using foreach method.
// pizzas.forEach(wonpizza =>{
// console.log(chalk.green.bold(`\nI like ${wonpizza} pizza.`));
// } );
//print a messege outside of the loop
console.log(chalk.yellow.bold("\nI really love pizza."));
console.log(chalk.yellow.bold("\nI really like pizza."));
