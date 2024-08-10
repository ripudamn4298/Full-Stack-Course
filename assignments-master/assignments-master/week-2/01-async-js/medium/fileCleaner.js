var fs = require('fs');
var str;
fs.readFile('file.txt','utf-8',function(err,data){
    // console.log(typeof data);
    var words = data.split("    ");
    
    var str="";
    
    for(let i=0;i<words.length;i++){
        if(words[i]!=" "){
            // words[i]=words[i].trim();
            str += words[i]+" ";
        }
        

    }
    // console.log(str);
    fs.writeFile('file.txt',str,(err)=>{
        if(err) throw err;
    })

})
// const words=str.split(" ");
// console.log(words[0]);


