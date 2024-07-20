// Q:42 
import chalk from "chalk";
// pass array to a function.
function show_magicians(magicians) {
    magicians.forEach(name => {
        console.log(chalk.green.bold(name));
    });
}
;
function make_great(magiciansg) {
    return magiciansg.map(name => `The Great ${name}`);
}
;
// make array of magicians.
let magician_array = ["David Copperfield.\n", "Harry Houdini.\n", "Penn Jillette.\n", "Teller.\n"];
//call function
let great_magician = make_great(magician_array);
show_magicians(great_magician);
