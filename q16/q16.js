// Q:16 
import chalk from "chalk";
//guest list
let guests = ["Elon Musk", "Jeff Bezos", "Mark Zuckerberg", "Sundar Pichai", "Bill Gates", "Warren Buffet"];
// print a good new message beacause i found a bigger dinner table.
console.log(chalk.green.bold("\nGood news all of you! I found a bigger dinner table\n"));
//add more guest.
guests.unshift("Mufti Akmal");
let middleGuest = "Haji Abdul Habib Attari";
let middleindex = guests.length / 4;
guests.splice(middleindex, 0, middleGuest);
guests.push("Haji Imran Attari");
guests.forEach((biglist) => {
    console.log(chalk.blue.bold(`Assalam-o-Alaikum ${biglist}, would you like to join me for dinner.\n`));
});
