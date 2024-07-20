// Q:23 
import chalk from "chalk";
//making a variable
let car = 'subaru'; //we assume its a big car
let car1 = 'bmw'; //we assume its a small car
//TOTAL 10 TESTS IN WHICH 5 ARE TRUE AND 5 ARE FALSE
console.log(chalk.green.bold("\n5 TEST WHICH EVALUTE TRUE\n"));
//Test-1 with comparison operators (==)equal to.
console.log(chalk.blue.bold(`test-1  (Is car == "subaru" I predict true)`));
console.log(chalk.green.bold(car == 'subaru')); //true
//Test-2 with comparison operators (!=)not equal to.
console.log(chalk.blue.bold(`test-2 (Is car1 != "subaru" I predict true)`));
console.log(chalk.green.bold(car1 != "subaru")); //true
//Test-3 with comparison operators (===)strict equal to.
console.log(chalk.blue.bold(`test-3 (Is car === "subaru" I predict true)`));
console.log(chalk.green.bold(car === 'subaru')); //true
//Test-4 with comparison operators (!==)strict not equal to.
console.log(chalk.blue.bold(`test-4 (Is car1 !== "subaru"I predict true)`));
console.log(chalk.green.bold(car1 !== "subaru")); //true
//Test-5 with comparison operators (>=)greater than or equal to.
console.log(chalk.blue.bold(`test-5 (Is car < "subaru" I predict true)`));
console.log(chalk.green.bold(car >= "subaru")); //true
console.log(chalk.green.bold("\n5 TEST WHICH EVALUTE FALSE\n"));
//Test-6 with comparison operators (==)equal to.
console.log(chalk.blue.bold(`test-6 (Is car == "bmw" I predict false)`));
console.log(chalk.red.bold(car == "bmw")); //false
//Test-7 with comparison operators (!=)not equal to.
console.log(chalk.blue.bold(`test-7 (Is car1 !="bmw" I predict false)`));
console.log(chalk.red.bold(car1 != "bmw")); //false
//Test-8 with comparison operators (<=) less than or equal to.
console.log(chalk.blue.bold(`test-8 (Is car < "bmw" I predict false)`));
console.log(chalk.red.bold(car < "bmw")); //false
//Test-9 with comparison operators (===)strict equal to.
console.log(chalk.blue.bold(`test-9 (Is car === "bmw" I predict false)`));
console.log(chalk.red.bold(car === "bmw")); //false
//Test-10 with comparison operators (!==)strict not equal to.
console.log(chalk.blue.bold(`test-10 (Is car1 !== "bmw" I predict false)`));
console.log(chalk.red.bold(car1 !== "bmw")); //false
//TEST END
