// Q:14 
import chalk from "chalk";
// this is a guest list.
let guests:string[] = ["Elon Musk", "Jeff Bezos", "Mark Zuckerberg", "Mukesh Ambani","Bill Gates", "Warren Buffet"];

// this prints a message to each guest with (.forEach) method.
guests.forEach((guest) => {
    console.log(chalk.blue.bold(`Assalam-o-Alaikum ${guest}, would you like to join me for dinner?\n`))
});




// this prints a message to each guest with (.map) method.
//guests.map((guest)=> console.log(chalk.green.bold(`Assalam-o-Alaikum ${guest}, you are invited to dinner.\n`))); 