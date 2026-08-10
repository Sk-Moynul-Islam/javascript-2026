const name="Moynul"
const myName=new String("Moynul")
console.log(myName.charAt(3));
console.log(myName.indexOf('y'));

const newName= myName.substring(0,4)
console.log(newName);

const anotherName= myName.slice(-5,4) //slice
console.log(anotherName);

const newString= "    hello    "
console.log(newString);
console.log(newString.trim()); //trim

const url ="https://google.com/google%20com"             
console.log(url.replace('%20','_')); //replace

console.log(url.includes('google'));

const newString2= "sk-moynul-islam"
console.log(newString2.split('-'));//split