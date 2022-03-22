import { coinFlips, countFlips } from "./coin.js";
import minimist from "minimist";
const args = minimist(process.argv.slice(2));
args["number"];
const number = args.number || 1;
const flipArray = coinFlips(number);
const flipTotals = countFlips(flipArray);
console.log(flipArray);
console.log(flipTotals);