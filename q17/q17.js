// Q:17 
import chalk from "chalk";
//guest list
let guests = ["Elon Musk", "Jeff Bezos", "Mark Zuckerberg", "Sundar Pichai", "Bill Gates", "Warren Buffet"];
// print a message we can invite only 2 people.
console.log(chalk.red.bold("\nUnfortunately, we can invite only two guests to dinner.\n"));
while (guests.length > 2) {
    let removeguest = guests.pop();
    console.log(chalk.red.bold(`Sorry ${removeguest} we can't invite you dinner.\n`));
}
;
guests.forEach((item) => {
    console.log(chalk.green.bold(`Assalam-o-Alaikum ${item} You are still invited to dinner!\n`));
});
//this shows an empty list.
guests.splice(0, guests.length);
console.log(guests);
