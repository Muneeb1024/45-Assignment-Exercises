// Q:30 
import chalk from "chalk";
//make a array of five or more usernames, including the name 'admin'
let userNames = ["Admin", "Muneeb", "Zianulabideen", "Maryam", "Tuba"];
//using foreach loop on array
userNames.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log(chalk.green.bold(`\nHello Admin, would you like to see a status report?`));
    }
    else {
        console.log(chalk.green.bold(`\nHello ${oneUser}, thank you for logging in again.`));
    }
});
