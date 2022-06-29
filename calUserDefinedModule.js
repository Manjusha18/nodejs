var calc = require('./calc')
//   ./ is used for user difined module
console.log(calc.add(12,23))
console.log(calc.sub(12,23))
console.log(calc.mul(12,23))

calc.div(12,2,(err,result)=>{
    if(err)
        console.log(err);
    else
        console.log(result);
})
