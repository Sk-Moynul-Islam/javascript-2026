const marvel=["spiderman","thor","ironman"]
const dc=["batman","flah","superman"]
//marvel.push(dc)
//console.log(marvel);

// const allHeros=marvel.concat(dc)
// console.log(allHeros);

const allNewHeros=[...marvel,...dc]
console.log(allNewHeros);

const array=[1,2,3,[4,5,6,[7,8,],9,[10,11]]]
const realArray=array.flat(Infinity)
console.log(realArray);


console.log(Array.from("Moynul"));

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3)); //convert any datatype to array
