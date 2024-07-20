// Q:39 
import chalk from "chalk";
// make a function.
function city_country(city:string,country:string){
    console.log(chalk.green.bold(`\n${city},${country}.`)); 
}
// call function with different aruments.
city_country("Karachi","Pakistan");
city_country("Hyderabad","India");
city_country("Tokyo","Japan");
city_country("Riyadh","Saudia Arabia");