// Q:43. 
import chalk from "chalk";
// pass array to a function.
function show_magicians(magicians) {
    magicians.forEach(name => {
        console.log(chalk.green.bold(name));
    });
}
;
// function to make magicians great through map
function make_great(magiciansg) {
    return magiciansg.map(name => `The Great ${name}`);
}
;
// make array of magicians.
let magician_array = ["David Copperfield.\n", "Harry Houdini.\n", "Penn Jillette.\n", "Teller.\n"];
let copy_magician_array = magician_array.slice();
let copy_great_magicians = make_great(copy_magician_array);
console.log(chalk.blue.bold("\nOriginal Array Of Magicians"));
show_magicians(magician_array);
console.log(chalk.blue.bold("\nCopied Array Of Magicians"));
show_magicians(copy_great_magicians);
