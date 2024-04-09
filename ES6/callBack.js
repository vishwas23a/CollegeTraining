const sum=(num1,num2,print)=>{
    let s=num1+num2;
    print(s);
}
const print=(msg)=>{
    console.log(msg,"hello");
}
sum(2,4,(a)=>{
    if(a>20){

    
    console.log("grater than 20");
    }
    else{
        console.log("less than 20");
    }
});

