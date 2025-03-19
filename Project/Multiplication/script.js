function calculateMultiply(){
    let num1=parseInt(document.getElementById('input-1').value);
    let num2=parseInt(document.getElementById('input-2').value);
    let multiply=num1*num2;
    document.getElementById('answer').innerHTML=`<b>Multiply : ${multiply}</b>`
}