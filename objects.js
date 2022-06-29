var myPenguin = {name:"Emperor Penguin" , origin :"Australian" , livingarea :"Africa"}
console.log("Hello, I'm a penguin and my name is",myPenguin.name);

myPenguin.canFly = false;
console.log(myPenguin.canFly);

myPenguin.chirp = function(){
    console.log("CHIRP CHIRP Is this what penguin sounds like ?");
}
myPenguin.chirp()

myPenguin.sayHello = function(){
    console.log("Hello , I'am a Penguin and my name is " + this.name );  
}
myPenguin.sayHello()

myPenguin.name ="McPenguinFace"
myPenguin.sayHello()

myPenguin.fly = function(){
    if(myPenguin.canFly){
        console.log("I can Fly");
    }
    else{
        console.log("No flying for me!");
    }
}
myPenguin.fly()

myPenguin.canFly = true;
myPenguin.fly()

var i;
for(i=0 ; i<myPenguin.length ; i++){
    console.log(myPenguin[i]);
}

Object.keys(myPenguin).forEach(i=> 
    console.log(i));
    
Object.values(myPenguin).forEach(i=> 
    console.log(i));

console.log(myPenguin)
console.log(JSON.stringify(myPenguin, null, 4));

myPenguin.size = "30";
console.log(myPenguin.size);

