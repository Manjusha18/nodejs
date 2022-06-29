// console.log("example with node js");
// console.log("Example node js application");
// var1 = 3;
// var2 = 4;
// console.log(var1 + var2)


// // 1 prgm
// function sortString(str) {
    
//     var splitString = str.split("");   
//     var sortArray = splitString.sort(); 
//     var joinArray = sortArray.join(""); 
//    console.log(joinArray); 
// }
// sortString("hello");

// //  3 prgm
// var myPenguin = {name:"Emperor Penguin" , origin :"Australian" , livingarea :"Africa"}
// console.log("Hello, I'm a penguin and my name is",myPenguin.name);

// myPenguin.canFly = false;
// console.log(myPenguin.canFly);

// myPenguin.chirp = function(){
//     console.log("CHIRP CHIRP Is this what penguin sounds like ?");
// }
// myPenguin.chirp()

// myPenguin.sayHello = function(){
//     console.log("Hello , I'am a Penguin and my name is " + this.name );  
// }
// myPenguin.sayHello()

// myPenguin.name ="McPenguinFace"
// myPenguin.sayHello()

// myPenguin.fly = function(){
//     if(myPenguin.canFly){
//         console.log("I can Fly");
//     }
//     else{
//         console.log("No flying for me!");
//     }
// }
// myPenguin.fly()

// myPenguin.canFly = true;
// myPenguin.fly()

// var i;
// for(i=0 ; i<myPenguin.length ; i++){
//     console.log(myPenguin[i]);
// }

// Object.keys(myPenguin).forEach(i=> 
//     console.log(i));
    
// Object.values(myPenguin).forEach(i=> 
//     console.log(i));

// console.log(myPenguin)
// console.log(JSON.stringify(myPenguin, null, 4));

// myPenguin.size = "30";
// console.log(myPenguin.size);





// function verifylogin(user,pwd,callback){
//     if(pwd=="pwd1")
//         callback(null,"correct login");
//     else
//         callback("incorrect login",null);
// }

// // in call back function we write anonymous function that means no name for that callback function
// verifylogin("user1","pwd2",function(err,result){
//     if(err){
//         console.log("invalid");
//     }
//     else{
//         console.log("valid user") 
//     }
// })


// erlier version 16. version use this model
// function verifylogin(user,pwd,callback){
//     if(pwd=="pwd2")
//         callback(null,"correct login");
//     else
//         callback("incorrect login",null);
// }

// verifylogin("user1","pwd2",(err,result) =>{
//     if(err){
//         console.log("invalid");
//     }
//     else{
//         console.log("valid user")
//     }
// })

console.log("program is starting");
// checking node js asynchronous or synchronous
setTimeout(()=>{
    console.log("inside timeout")
},2000);
console.log("after timeout")
console.log("program ending")
//proved that my node js is asynchronous


// asynchronous means block the code 
// synchronous means dont block the code that is call back functions


// core modules
//nodejs modules  1.console   2.fs   3.os
// we ever used for fs or os




