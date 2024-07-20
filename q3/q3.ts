//Q:3 
import chalk from "chalk";
//This stores the name.
let perName : string ="Muneeb";

// Convert to lower case.
console.log(chalk.green.bold(perName.toLowerCase()));

//Convert to upper case.
console.log(chalk.green.bold(perName.toUpperCase()));

// Convert to title case.
console.log(chalk.green.bold(perName.charAt(0).toUpperCase() + perName.slice(1).toLowerCase()));


