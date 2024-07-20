// Q:21
import chalk from "chalk";
//make an interface for hondacivic.
let hondacivic :{
    model :number;
    color :string;
    keyFeatures:string[];
    rimSize:number;
isitsedan:boolean;
seatCount:number;
isfourwheeeldrive:boolean;
isitpetrol:boolean;
trunkSpace:number;
builtQuality:string;
}

//make an object of hondacivic
 hondacivic ={
    model:2025,
    color:"black",
    keyFeatures:["height adjustment","smooth steering","powerful engine 1.8 liter"],
rimSize:18,
isitsedan:true,
seatCount:5,
isfourwheeeldrive:false,
isitpetrol:true,
trunkSpace:100,
builtQuality:"awesome",
};

console.log(chalk.green.bold(`\nHonda Civic details are: model is ${hondacivic.model}, color is ${hondacivic.color}, key features are ${hondacivic.keyFeatures},rimSize is ${hondacivic.rimSize}, it is sedan: ${hondacivic.isitsedan}, total seat is ${hondacivic.seatCount}, it is four wheel drive:${hondacivic.isfourwheeeldrive}, it is petrol:${hondacivic.isitpetrol}, trunk space is ${hondacivic.trunkSpace}, built quality is ${hondacivic.builtQuality}.\n`));


//console.log((hondacivic));
