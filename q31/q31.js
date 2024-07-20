// Q:31 
import chalk from "chalk";
//creating an array
let userNames = ["Abdul", "Hussain", "Admin", "Husnain", "Ali", "Sara", "Muneeb"];
userNames = [];
if (userNames.length === 0) {
    console.log(chalk.red.bold("Your array is empty we need to find some users!"));
}
else {
    //using foreach loop on array
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
