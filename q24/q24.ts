// Q:24 
    import chalk from "chalk";
//make variables
let cheku:string="cheku";
let upperCheku:string = "CHEKU";
let eighty:number = 80;
let forty:number = 40;
let classRoom:string[] = ["Muneeb", "Farjad","Fariha","Laddu"];

//test for equality and inequality with strings
console.log(chalk.blue.bold("\nis cheku is equal to cheku?"));
console.log(chalk.green.bold(cheku == "cheku")); //true

console.log(chalk.blue.bold("\n is cheku is not equal to cheku?"));
console.log(chalk.red.bold(cheku != "cheku")); //false

//test using the lower case function
console.log(chalk.blue.bold("\n is upperCheku is equal to cheku after converting to lowecase"));
console.log(chalk.green.bold(upperCheku.toLowerCase() == "cheku")); //true

console.log(chalk.blue.bold("\n is upperCheku is not equal to cheku after converting to lowecase"));
console.log(chalk.red.bold(upperCheku.toLowerCase() != "cheku")); //false

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//equality and inequality
console.log(chalk.blue.bold("\n is forty is equal to eighty?"));
console.log(chalk.red.bold(forty == eighty)); //false
console.log(chalk.blue.bold("\n is forty is not equal to eighty?"));
console.log(chalk.green.bold(forty != eighty)); //true
//less than & greater than
console.log(chalk.blue.bold("\n is eighty is less than forty?"));
console.log(chalk.red.bold(eighty < forty )); //false

console.log(chalk.blue.bold("\n is eighty is greater than forty?"));
console.log(chalk.green.bold(eighty > forty) ); //true

//greater than or equal to & less than or equal to
console.log(chalk.blue.bold("\n is forty is less than or equal to eighty?"));
console.log(chalk.green.bold(forty <= eighty));//true

console.log(chalk.blue.bold("\n is forty is greater than or equal to eighty?"));
console.log(chalk.red.bold(forty >= eighty)); // false

// Tests using "and" and "or" operators
console.log(chalk.blue.bold("\n is forty is equal to eighty and forty is less than eighty?"));
console.log(chalk.red.bold(forty == eighty && forty < eighty)); //false

console.log(chalk.blue.bold("\n is forty is equal to eighty or forty is less than eighty?"));
console.log(chalk.green.bold((forty == eighty || forty < eighty))); //true

// Test whether an item is in a array
console.log(chalk.blue.bold("\n is Farjad is in the classRoom?"));
console.log(chalk.green.bold(classRoom.includes("Farjad"))); //true

console.log(chalk.blue.bold("\n is Barfi is in the classRoom?"));
console.log(chalk.red.bold(classRoom.includes("Barfi"))); //false

// Test whether an item is not in a array
console.log(chalk.blue.bold("\n is Farjad is not in the classRoom?"));
console.log(chalk.red.bold(!classRoom.includes("Farjad"))); //false

console.log(chalk.blue.bold("\n is Barfi is not in the classRoom?"));
console.log(chalk.green.bold(!classRoom.includes("Barfi"))); //true