// function addTwoNumber(number1,number2){
//     console.log(number1+number2);
    
// }
function addTwoNumber(number1,number2){
    // let result =number1+number2
    // return result
    return number1+number2
}
const result= addTwoNumber(3,4)
//console.log("Result:",result);
// function loginUserMessage(username){
//     return `${username} just logged in`
// }
//console.log(loginUserMessage("moynul"));

function loginUserMessage(username){
    if(username === undefined){  // also use !username 
    console.log("Please enter a valid username");
        return
    
}
    return `${username} just logged in`
}
//console.log(loginUserMessage());
function calculateCartPrice(val1,v1l2,...num1){
    return num1
}
//console.log(calculateCartPrice(2,10,20,30));

const user={
    name:"moynul",
    age:21
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.name} age is ${anyobject.age}`);
    
}
//handleObject(user)
handleObject({
    name:"sk",
    age:18
})

const newArray = [100,200,300]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(newArray));
console.log(returnSecondValue([100,125,130]));