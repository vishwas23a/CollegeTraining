
let age=10;
const info= new Promise((resolve,reject)=>{
    // setTimeout(()=>{

    //         console.log("hello");
    // resolve;
    // },3000)
    if(age>18){
        resolve("you can walk")
    }
    else{
        reject("You can not walk")
    }
}) 
info.then(result =>console.log(result))
.catch(error=>console.log(error))


const result=async()=>{
   try{
     let res=await info;
    console.log(res);
   }
   catch(error){
    console.log(error);

   }

}
result()