// Q:18 
import chalk from "chalk";
//MAKING AN COUNTRY LIST AND SORTING IT AND PRINT ORIGINAL ORDER.
let favPlaces:string[] = ["Dubai","Turkey","Paris","SaudiaArabia","SwitzerLand"];
console.log(chalk.green.bold("\noriginal order:", favPlaces));
//print the array in alphabetical order without modifying the original array.
console.log(chalk.bold.bold("\nAlphabetical order:"),[...favPlaces].sort());
//show the array is still in original order
console.log(chalk.green.bold("\nstill in original order:"),favPlaces);
//print the array in reverse alphabetical order without modifying the original array.
console.log(chalk.blue.bold ("\nreverse order:"),[...favPlaces].reverse());
console.log(chalk.green.bold (favPlaces));
//we have changed the original array in reverse order.
console.log(chalk.bold.blue ("\nOriginal array reversed:"),favPlaces.reverse());
//print the array to show back to its original order.
console.log(chalk.green.bold ("\nBack to original order:"),favPlaces.reverse());
//print the array to show that its order has been changed in alphabetical order now.
console.log(chalk.blue.bold ("\nsorted in alphabetical order:"),favPlaces.sort());
//print the array to show that its order has been changed in reverse alphabetical order now.
console.log(chalk.blue.bold ("\noriginal array in reversed again :"),favPlaces.reverse());
