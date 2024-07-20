// Q:20 
import chalk from "chalk";
//making a list of languages
let Languages = ["German", "English", "Urdu", "French", "Arabic"];
//print a messege of list.
console.log(chalk.red.bold(`\n\t"LIST OF LANGUAGES WHICH I LIKE"\n`));
Languages.forEach((Language) => {
    console.log(chalk.green.bold(`I'd like to learn ${Language}.\n`));
});
