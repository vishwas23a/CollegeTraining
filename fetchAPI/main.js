
const para=document.getElementById("para");
const name=document.getElementById("name");
const image=document.getElementById("image")
// const fetchData =async()=>{

//     const data=await fetch("https://api.github.com/users")
//     return await data.json()
    
// }

// const fun=async()=>{

//     const res= await fetchData();
//     para.innerHTML=res[0].id;
//     name.innerHTML=res[0].login;
//     image.innerHTML=`<img src=${res[0].avatar_url}> `
// }
// fun()

fetch("https://api.github.com/users")
.then(data=>data.json())
.then(data=>{
  
    para.innerHTML=data[0].id;
    name.innerHTML=data[0].login;
    image.innerHTML=`<img src=${data[0].avatar_url}> `

})