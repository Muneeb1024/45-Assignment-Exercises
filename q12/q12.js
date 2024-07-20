// Q:12 
import chalk from "chalk";
//this is the first method to complete this task.
//This is list of an array.
let friends = ["Shaheen", "Saheefa", "Suneel", "Awais", "Muneeb", "Mansoor"];
//this method to print the messege one by one with personalize thier name.
for (let friend of friends) {
    console.log(chalk.green.bold(`Hello ${friend}, Do you want to learn Generative AI?\n`));
}
;
// //This this a second method to complete this task.
// //this is array
// let friends:string[] =["Shaheen,","Saheefa,","Suneel,","Awais,","Muneeb,", "Mansoor,"];
// // This is the messege to send them.
// let message:string = "Do you want to learn Generative AI?\n";
// //print message.
// console.log(chalk.green.bold (friends[0] , message));
// console.log(chalk.green.bold (friends[1] + " " + message));
// console.log(chalk.green.bold (friends[2] + " " + message));
// console.log(chalk.green.bold (friends[3] + " " + message));
// console.log(chalk.green.bold (friends[4] + " " + message));
// console.log(chalk.green.bold (friends[5] + " " + message));
