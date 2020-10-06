var fs = require('fs'); // importing filesystem module

var sampleText = fs.readFileSync('sample.txt'); // blocking I/O
//will be printed first
console.log(sampleText.toString()); 

//will be printed at last as the program runs line by line and char by char
console.log("Program Ended"); 

