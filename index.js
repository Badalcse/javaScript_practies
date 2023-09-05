// var num = 2;

// function sayMe(a){
//     console.log(a + 12);
// }
// setTimeout(function(){
//     console.log("hy badal");

// },1000)
// sayMe("10")

// function bad(){
//     let str = "hell badal kumar"
//     console.log(str);

// }
// bad()

// function isEven(element){
//     if(element % 2 == 0){
//         return true;
//     }
//     return false;
// }
// console.log(isEven(3));

// let num = new function(element1){
//     if(element1 %2 == 0){
       
//         console.log("this is even number");
//     }
//     console.log("this is not even");

// }
// let badal = new num(4);
// console.log(badal);

//reduceFilter

// let num = [1,2,3,4,5,6,7,8]

// let even = num.filter((item) => item % 2 == 0);
// console.log(even);

// const student = [
//     {name: "badal", roll: 4006},
//    { name: "rahul", roll: 4007},
//    {name: "VIKASH", roll: 4007}

// ];
// const fliderStudet = student.filter((std)=> {return  std.roll == 4007} )

// console.log(fliderStudet);

// const mark = [
//     {subject: "English", mark: 60},
//     {subject: "Hindi", mark: 65},
//     {subject: "Science", mark: 70},
//     {subject: "math", mark: 80},
//     {subject: "physice", mark: 60}

// ]

// const mark1 = mark.filter((
//     mark
// )=> mark >=60)
// console.log(mark);

// let fruit = ["mango", "apple", "banana","potatoto"]

// console.log(fruit instanceof Array);
// console.log(fruit instanceof Object);
// console.log(fruit instanceof Boolean);
// console.log(fruit instanceof operator);

// let fruit = ["mango", "apple", "banana","potatoto"]

// let map_fruits = fruit.map((f)=> {console.log(f  + " is to add" );})

// const mark = [
//    { subject: "math",mark: 79},
//    { subject: "hindi", mark: 50},
//     {subject: "science", mark: 50}
// ]

// const result =mark.reduce( function(totalMark, insialMark){
//     return totalMark + insialMark.mark;
// },0)
// console.log(result);


// const person ={
//     firstName: "badal"
// }
// console.log(person);

// const person  = new Object();
// person.firstNmae4 = "badal"

//map method

// let num = [1,2,3,4,5];
// const multiplication = num.map((num, i, arr)=>{
   
//     return num * 3 + i;
    
   

// })
// console.log(multiplication);

//filter

// let arr = [1,2,3,4,5,6,7];

// const num = arr.filter((bad)=>{
//     return bad % 2 == 0;
// })
// console.log(num);

//reduce method

let arr = [1,2,3,4,5];

const num = arr.reduce((ins, curr, i, arr)=>{
    return ins + curr;
})
console.log(num);

