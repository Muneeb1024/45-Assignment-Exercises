// Q:22 
import chalk from "chalk";
//creating an array
const errorarraymonths = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "octuber", "november", "december"];
//producing error ! by assessing an invalid index of array
// console.log(errorarraymonths[12]);
//now error removed by changing the index
console.log(chalk.green.bold(errorarraymonths[11]));
