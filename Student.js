
const printError=(id,msg)=>{
document.getElementById(id).innerHTML=msg
}
const validate =()=>{
    let nameError=mobileError=emailError=hobbieError=selectError=true;
    let data={
        name:"",
        mobile:"",
        email:"",
        hobbies:[],
        lang:""
    }

    const name=document.studentForm.name.value;
    const email=document.studentForm.email.value;
    const number=document.studentForm.number.value;
    const hobbies=document.getElementsByName("hobbies")
    const lang=document.studentForm.lang.value;
    
if(name===""){
    printError("nameError","please Enter your Name")
}else{
    printError("nameError","")
    data={...data,name}

    nameError=false
}
if(email===""){
    printError("emailError","Please Enter your Email")
}
else{
    printError("emailError","")
    data={...data,email}
    emailError=false;
}
if(number===""){
    printError("mobileError","Please Enter your Email")
}
else{
    printError("mobileError","")
    data={...data,number}
    mobileError=false
}

if(hobbies.length>0){
    for( let hobbie of hobbies){
        if(hobbie.checked===true){
            data.hobbies.push(hobbie.value);
        }
    }
    if(data.hobbies.length>0){
        printError("hobbieError")
        hobbieError=false;
    }
    else{
        printError("hobbieError","Please select your hobbie");
    
    }
}
if(lang ==="Select"){
    printError("selectError","Select Your language")
}
else{

    printError('selectError',"");
    data={...data,lang}
    selectError=false;
}
    if(nameError||mobileError||emailError||hobbieError||selectError){
        return false;
    }
    else{
        alert(JSON.stringify(data));
        return true;
    }

}