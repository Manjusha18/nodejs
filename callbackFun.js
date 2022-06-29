

function verifylogin(user,pwd,callback){
    if(pwd=="pwd1")
        callback(null,"correct login");
    else
        callback("incorrect login",null);
}

// in call back function we write anonymous function that means no name for that callback function
verifylogin("user1","pwd2",function(err,result){
    if(err){
        console.log("invalid");
    }
    else{
        console.log("valid user") 
    }
})


//erlier version 16. version use this model
function verifylogin(user,pwd,callback){
    if(pwd=="pwd2")
        callback(null,"correct login");
    else
        callback("incorrect login",null);
}

verifylogin("user1","pwd2",(err,result) =>{
    if(err){
        console.log("invalid");
    }
    else{
        console.log("valid user")
    }
})