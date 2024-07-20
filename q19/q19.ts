// Q:19
import chalk from "chalk";
// make an array of guest
let guests:string[] = ["Muneeb","Maryam","Zainab","Sawera","Jawed","Abdullah"];

//print messege who invited to dinner with no of people
let lengthOfGuests = guests.length;
console.log(chalk.green.bold(`\nWe are inviting total (${lengthOfGuests}) people to dinner.\n`)); 
