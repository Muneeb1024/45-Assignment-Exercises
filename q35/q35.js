// // Q:35
import chalk from "chalk";
//creating an array
let petAnimals = ["Cat", "Horse", "Rabbit", "Dunba", "Parrot"];
//using forEach method.
petAnimals.forEach(onepet => {
    console.log(chalk.green.bold(`\nA ${onepet} would make a great pet.`));
});
// //using for loop
// for(let onepet of petAnimals){
//     console.log(chalk.green.bold(`\nA ${onepet} would make a great pet.`))
// };
//print a messege outide of the for loop
console.log(chalk.blue.bold(`\nAny of these animals would make a great pet!`));
