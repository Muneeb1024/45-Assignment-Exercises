// Q:15.
import chalk from "chalk";
//guest list.
let guests = ["Elon Musk", "Jeff Bezos", "Mark Zuckerberg", "Mukesh Ambani", "Bill Gates", "Warren Buffet"];
//unable to attend.
let cannotMakeit = "Mukesh Ambani";
console.log(chalk.red.bold(`\n${cannotMakeit}, Can't make it to dinner\n`));
//replace the guest.
let newGuest = "Sunder Pichai"; // this is the new guest of dinner.
guests[guests.indexOf(cannotMakeit)] = newGuest; // replace the guest with new guest with use (.indexOf) method.
// print the message of new guest list.
guests.forEach((newGuests) => {
    console.log(chalk.green.bold(`Assalam-o-Alaikum ${newGuests}, would you like join me for dinner.\n`));
});
