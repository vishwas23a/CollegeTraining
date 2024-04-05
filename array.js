const msg=()=>{
    console.log("mca");
}
const data=[10,20,30,40,"vishaws",{id:2,nam:"vishwas"}];

// console.log(data[5].nam);
// data[4]();
// for(let i=0; i<data.length; i++){
//     console.log(`value of ${i} is ${data[i]} `);
// }
// for(let i of data){
//     console.log(`value is ${i.nam} `);
// }
data.forEach(value => {
    console.log(`value is ${value}`);
    
});
data.forEach(value=>console.log(`vaule is ${value}`));
