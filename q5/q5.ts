// Q:5 
import chalk from "chalk";
//This stores a name of famousperson in a variable.
let famous_person: string = "Eleanor Roosevelt";

//This stored a qoute in a variable.
let famous_qoute : string = `"The future belongs to those who believe in the beauty of their dreams."`;

//then compose messege
let message:string =`\n${famous_person} once said, ${famous_qoute}\n`;

// Then print message.
console.log(chalk.green.bold(message));











