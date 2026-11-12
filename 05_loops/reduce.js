const myNums=[1,2,3]

// const myTotal=myNums.reduce(function(acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc+currval},0)
//using arrow function
const myTotal=myNums.reduce((acc,curr)=>(acc+curr),0)
    //console.log(myTotal);

const shoppingCart=[
    {
        itemName:"js cource",
        price:999
    },
     {
        itemName:"py cource",
        price:2999
    },
     {
        itemName:"java cource",
        price:1999
    },
     {
        itemName:"dsa cource",
        price:4999
    },
]
const total=shoppingCart.reduce((acc,item)=>(acc+item.price),0)
console.log(total);
