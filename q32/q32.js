// Q:32 
import chalk from "chalk";
//array of current users
let current_users = ["abbas", "MUNEEB", "Rakul", "komal", "junaid", "Yousuf"];
//array of new users
let new_users = ["Bill Gates", "Elon Musk", "sweety", "muneeb", "hasan", "komal", "junaid", "yousuf"];
//loop through new users and check if it is available
new_users.forEach(new_one_user => {
    //making a condition for uswername availability
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());
    //print different messeges using if-else statement
    if (our_condition) {
        console.log(chalk.red.bold(`\nSorry ${new_one_user} is already taken. Please enter a new username`));
    }
    else {
        console.log(chalk.green.bold(`\nThis username ${new_one_user} is available`));
    }
});
