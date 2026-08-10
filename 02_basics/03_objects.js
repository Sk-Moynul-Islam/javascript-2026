// objects literals
const mySym=Symbol("key1")

const jsUser={
    name:"moynul",
    "full name":"sk moynul islam",
    age:"21",
    [mySym]:"mykey1",
    email: "moynul@gmail.com",
    location:"Hatpukur",
    isLoggedIn: false,
    lastLogingDays:["monday","satasday"]
}
// console.log(jsUser.name);
// console.log(jsUser["email"]); 
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
//jsUser.email="skmoynul.com" //manupulate the value
//Object.freeze(jsUser) //freeze the object
//jsUser.email="skmoynulislam.com"
//console.log(jsUser);

jsUser.greeting=function(){
    console.log("hello js user");
    
}
jsUser.greetingTwo=function(){
    console.log('hello js user,');
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
