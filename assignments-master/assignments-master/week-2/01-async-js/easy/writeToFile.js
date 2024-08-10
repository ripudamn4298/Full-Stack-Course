var fs= require('fs');
const data = "this is new data";
fs.writeFile('file.txt',data,(err)=>{
    if(err) throw err;
})