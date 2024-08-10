
var fs = require('fs');
fs.readFile('file.txt','utf8',function(err,data){
    console.log(data);
})
var a=0;
for(let i=0;i<1000000000;i++){
    a=a+i;
}
console.log(a);