// Q:38 
import chalk from "chalk";
//make a function.
function describe_city(city:string="Hyderabad", country:string= "Pakistan") {
    console.log(chalk.green.bold(`\n${city} is in ${country}.`));
}
// call functions with different cities.
describe_city();
// call function 2
describe_city("Karachi");
// call function 3
describe_city("Riyadh", "Saudia Arabia");
// call function 4
describe_city("Lahore");














//creatig a function
// function describe_city(city:string,country:string="Pakistan"){
//     console.log(`${city} is in ${country}`);
// }
// //calling the function
// describe_city("karachi");
// describe_city("Islamabad");
// describe_city("Barcelona","Spain");
