const fs = require('fs');

fs.writeFile('demo.txt', "success", (err) => {
  if(err){
    console.log(err);
  }else{
    console.log("File writing successful. Will read the file now");

    // todo: read file async 
    fs.readFile('demo.txt', (err, data) => {
      if(!err){
        console.log(data.toString());
      }else{
        console.log(err);
      }
    })  
  }
} );

