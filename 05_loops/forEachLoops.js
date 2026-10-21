const fruits=['apple','banana','mango']

fruits.forEach( function(val){
//console.log(val);
    
})
//foreach using arrow function
fruits.forEach((item)=>{
   // console.log(item);
    
})

fruits.forEach((item,index,arr)=>{
   // console.log(item,index,arr);
    
})

const myCoding=[
    {
        langugeName:'jvsrcipt',
        langugeFileName:'js'
    },
    {
        langugeName:'java',
        langugeFileName:'java'
    },
    {
        langugeName:'python',
        langugeFileName:'py'
    }

]
myCoding.forEach( (item)=>{
        console.log(item.langugeNam);
        
})