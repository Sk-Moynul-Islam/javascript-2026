const myArr=[1,2,3,4,5]
console.log(myArr[2]);
const myArr2=new Array(1,2,3,4)
const myName=["sk","moynul","islam"]
console.log(myName[2]);

//Array methods

myArr.push(6) //add at last position
myArr.pop() //remove last position element
myArr.unshift(3) //add at first position
myArr.shift()  //remove first position element
//console.log(myArr);

console.log(myArr.includes(5));
console.log(myArr.indexOf(3));
const newArr=myArr.join()
console.log(typeof newArr);

//slice,splice

console.log("A",myArr);

const myn1=myArr.slice(1,3) //not manupulate the original array & not print the end parameter value
console.log(myn1)
console.log("B",myArr);

const myn2=myArr.splice(1,3) //manupulate original array & also print the end parameter value
console.log(myn2);
console.log("C",myArr);
