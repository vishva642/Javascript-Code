let count = 0;
function add(){
    console.log(`Count : ${count}`);
    count++;
}
setInterval(add, 1000);