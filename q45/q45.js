// Q:45. 
import chalk from "chalk";
//define a function to create a car object with optional options...
function detail_car(manufacturer, model, ...optional) {
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    //add additional options to the car object
    optional.forEach(options => {
        let [key, value] = options.split(":");
        //car [key.trim()] = value.trim();
        car[key.trim()] = value.trim();
    });
    return car;
}
;
//call the function to create a car object
let myCar = detail_car("Hyundai", 2025, "CarName:Elantra", "Color:Mehroon", "Engine:Petrol", "Wheels:Alloy", "Transmission:Automatic", "Sunroof:true");
//print heading  og object.
console.log(chalk.green.bold("\nCar Details Object:"));
//print the variable to ensure all the informations is stored in the car object.
console.log(myCar);
