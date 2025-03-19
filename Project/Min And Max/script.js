function calculateMin(){
    let arr=document.getElementById('input-1').value.split(',').map(Number);
    let result=Math.min(...arr);
    document.querySelector('#answer').innerHTML=`<i>Min Is: </i>${result}`
}
function calculateMax() {
    let arr = document.getElementById('input-1').value.split(',').map(Number);
    let result = Math.max(...arr);
    document.querySelector('#answer').innerHTML = `<i>Max Is: </i> ${result}`;
}