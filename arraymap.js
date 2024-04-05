const array=[1,2,1,1,1,1,1,1,1];
array.push(11);
console.log(array);
array.map(item=>console.log(`value is ${item*10}`));
let sum=array.reduce((a,b)=>a*b);
console.log(sum);
let even=array.filter(item=>item%2!=0);
console.log(even);