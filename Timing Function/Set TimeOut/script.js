let count = 1;
function add(){
    console.log(`Count : ${count}`);
    count++;
}
let interval=setInterval(add, 1000);
setTimeout(()=>{
    clearInterval(interval);
}, 6000)