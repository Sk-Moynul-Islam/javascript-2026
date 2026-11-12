const myNums=[1,2,3,4,5,6]
//const newMyNum=myNums.map((num)=> num+10)
//chaning
const newMyNum=myNums
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num>=30)

console.log(newMyNum);
