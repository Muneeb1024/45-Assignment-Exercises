// Q:6 
import chalk from 'chalk';
//This stored the name with whitespace arround.
let fullName = "\t\tABDULMANSOOR\t\t";
let fullName1 = "\n\nABDULMANSOOR\n\n";
//this shows the names with white space.
console.log(chalk.blue.bold(fullName));
console.log(chalk.blue.bold(fullName1));
//this shows the names without spaces.
console.log(chalk.blue.bold(fullName.trim()));
console.log(chalk.blue.bold(fullName1.trim()));
