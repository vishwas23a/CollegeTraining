const data={
    id:1,
    nam:"vishwas",
    course:"mca",
    college:"kiet",
    marks:[1,2,3,4,5],
    play:()=>console.log("play music"),
}
console.log(data);
console.log(data.nam);
console.log(data.play());
data.marks.forEach(element =>console.log((`element is ${element}`)));
