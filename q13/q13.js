// Q:13. 
import chalk from "chalk";
// make a list of favourite transportation.
let favTrans = ["Toyota CHR.\n", "HONDA N-ONE.\n", "MOTOR HOME.\n", "Road prince wego Motorcycle.\n", "Mercedeze Benz.\n"];
//this prints the message one by one with (.forEach method).
favTrans.forEach(favTrans => {
    console.log(chalk.green.bold(`I would like to own a ${favTrans}`));
});
//This prints the message one by one with (.map method).
//favTrans.map((favTrans)=> console.log("I would like to own a ",favTrans));
