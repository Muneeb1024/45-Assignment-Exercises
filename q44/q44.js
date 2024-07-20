// Q:44.
import chalk from "chalk";
//define a function with rest a paarmeter that accept items and representing a sandwich.
function make_sandwich(...sanditems) {
    console.log(chalk.green.bold("\nMaking a sandwich with the following ingredients.\n"));
    sanditems.forEach(singitem => (console.log("--> " + singitem)));
    console.log(chalk.green.bold("NOW ENJOY YOUR SANWICH"));
}
;
//call the function 3 times with different number of arguments.
make_sandwich("Chicken Tikka", "mozrela cheese");
make_sandwich("onion", "cocumber", "tomato", "mushroom");
make_sandwich("Chicken", "bbq sause", "potato", "egg", "mayonese", "ketchup", "beefkabab", "black olives");
