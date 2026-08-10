//Perimitive
// 7types: String,Number,Boolean,null,undefined,Symbol,BigInt
 
//Reference (Nun primitive)
//Array, Objects, Function

//stack(primitive) ,heap(non-primitive)

//example of Stack memory (Primitive)
let myName="Moynul"
let surname =myName

surname="islam"
console.log(surname);

//example of Heap memory (Non-Primitive)
let userOne ={
    gmail: "skmoynul@gmail.com",
    upi:"moynul@ybl"
}
let userTwo=userOne
userTwo.gmail="skmi@google.com"
console.log(userOne.gmail);
console.log(userTwo.gmail);
