const sum=(num1=0,num2=0,...numbers)=>{ 

    let s=0;
if(numbers.length>0){
     s=numbers.reduce((a,b)=>a+b); 
}
console.log("sum is ",(num1+num2+s));

}
sum(23,345,45,3);
