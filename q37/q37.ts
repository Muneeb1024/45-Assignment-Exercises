// Q:37 
import chalk from "chalk";

 //make a function
 function make_shirt(size:string="Large",message:string ="I love Typscript"){
console.log(chalk.green.bold(`\nI selected ${size} size of shirt with prints ${message} message on the shirt\n`));
 }
// call functions.
make_shirt();
//second call function.
make_shirt("Medium","I love Python");
//third call function.
make_shirt("(any size)","(WE can write different messages on the shirt)");
























