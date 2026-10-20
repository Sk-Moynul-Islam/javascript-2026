for (let i = 0; i <= 10; i++) {
    //console.log(i);
    
}


for (let i = 0; i <5; i++) {
   // console.log(`outer loop ${i}`);
    
    for (let j = 0; j < 10; j++) {
        
       // console.log(`inner loop value ${j} and inner i :${i}`);
        
    }   
}


for (let i = 1; i <=10; i++) {
   //onsole.log(`Table of ${i}`);
    
    for (let j = 1; j <=10; j++) {
       //console.log(`${i} X ${j} = ${i*j}`);
        
    }
    
}

let myArray=["apple","banana","guava","mango"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element);
    
}

// break and continue

for (let i = 0; i < 10; i++) {
   if(i==5){
    break;
   }
   console.log(i);
   
    
}

for (let j = 0; j < 10; j++) {
    if(j==5){
        continue;
    }
    console.log(j);
    
    
}