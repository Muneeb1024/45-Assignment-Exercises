// Q:26 
    import chalk from "chalk";
    //define variable
    let alienColor:string="pink";
    //first version
//if statement
if (alienColor === "yellow"){
    console.log(chalk.green.bold("Player just earned 5 points for shooting the alien"))
}
//else statement
else if(alienColor === "green"){
    console.log(chalk.green.bold("Alien color is not green player just earned 7 points"))
}
else{
    console.log(chalk.green.bold("Alien color is not green player just earned 10 points"))
}

//second version

if(alienColor === "brown"){
    console.log(chalk.green.bold("I am come from if statement"))
}
else{
    console.log(chalk.green.bold("Player just earned 15 points"));
    console.log(chalk.bold.green("I am come from else statement"))
}



