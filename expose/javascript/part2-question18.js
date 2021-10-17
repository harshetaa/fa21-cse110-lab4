var x = 0;
var intervalID = setInterval(printSec, 1000);

function printSec(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
    x++;
    if (x == 20){
        clearInterval(intervalID);
    }
}
