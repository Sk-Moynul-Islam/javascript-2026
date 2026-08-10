const facebookUser={}

facebookUser.id="123abc"
facebookUser.name="moynul"
facebookUser.isLoggedin=false
//console.log(facebookUser);


const regularUser={
    email:"hello@gmail.com",
    fullname:{
         userfullname:{
            firstname:"moynul",
            lastname:"islam"
         }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);//ctrl + L

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const obj3=Object.assign({},obj1,obj2) //{} not nesesarry

const obj3={...obj1,...obj2}
//console.log(obj3);

// console.log(facebookUser);
// console.log(Object.keys(facebookUser));
// console.log(Object.values(facebookUser));
// console.log(Object.entries(facebookUser));

// console.log(facebookUser.hasOwnProperty('name'));

 //destructure
const details={
    myName:"moynul",
    mylastname:"islam"
}
const{mylastname:lastname}=details
console.log(lastname);
console.log(details.myName); //basic object call