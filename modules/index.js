const {randomInteger} = require("./random-integer/index");

const {randomArray} = require("./random-array/index");

const {alphanumeric} = require("./random-alphanumeric/index");


const randomNum = randomInteger(1,10);
console.log(randomNum);

const randomSeq = alphanumeric(7);
console.log(randomSeq);

const randomArr = randomArray(1,10,7);
console.log(randomArr);