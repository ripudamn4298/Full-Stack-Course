
// function count(){
//     i++;
//     console.log(i);

// }
// var i=0;
// setInterval(count,1000);

function count(){
    i++;
    console.log(i);
    print();
}

function print(){
    setTimeout(count,1000);
}
var i=0;
print();