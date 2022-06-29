// var fs = require('fs')

// fs.readFile("text.txt","utf8",function(err,data){
//     if(err)
//         console.log("error in reading file");
//     else
//         console.log(data)
// })



// var os = require('os')
// console.log(os.hostname())
// console.log(os.getPriority())
// console.log(os.homedir())
// console.log(os.loadavg)
// console.log(os.networkInterfaces())
// console.log(os.totalmem())
// console.log(os.release())


// let cowsay = require("cowsay");
// let a = cowsay.say({
//     text : "I'm a moooodule",
//     e : "%%",
//     T : "&&"
// });
// console.log(a);


// var calc = require('./calc')
// //   ./ is used for user difined module
// console.log(calc.add(12,23))
// console.log(calc.sub(12,23))
// console.log(calc.mul(12,23))

// calc.div(12,2,(err,result)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log(result);
// })


var book={title :"core java" , author:" Herbert Shield",price:500 , publisher:"dkoe"};
// convert object to the string   - then it will all the properties in double quotes
var jsonbook = JSON.stringify(book)
console.log(jsonbook);


// convert string to object  
var bookobj = JSON.parse(jsonbook)
console.log(bookobj)
// each property

for(ele in bookobj){
    console.log(ele)
}

Object.keys(book).forEach(i => console.log(i))
Object.values(book).forEach(i => console.log(i))
console.log(book)

// Object.keys(myPenguin).forEach(i=> 
//     console.log(i));


// homework -  prepare one text file with json data 
var fs = require("fs")
fs.readFile("jsondata.txt","utf8",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        var data = JSON.stringify(book);
        console.log(data);
    }
})







var chalk = require('chalk')

const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));


// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

// Use RGB colors in terminal emulators that support it.
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));



// the text which is moment of one page to another page is call hypertext
// communication between client and server
// http methods
// get  to take a required details from server  - eg: getting results
// post   sent a message to attachment a files and post
// delete    delete a service from the server
// put

// libraries for http request
// needle, fetch ,axios ,got

// get method parameters
// error
//  all process is correctly receives then status code - 200   (response)
// body - may get json data or html 