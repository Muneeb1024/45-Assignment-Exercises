// Q:41 
import chalk from "chalk";

// pass array to a function.
function show_magicians(magicians:string[]){
magicians.forEach(name => {
    console.log(chalk.green.bold(name));
})
};
// make array of magicians.
let magician_array:string[]= ["\nDavid Copperfield.","\nHarry Houdini.","\nPenn Jillette.","\nTeller."]; 
//call function.
show_magicians(magician_array);

