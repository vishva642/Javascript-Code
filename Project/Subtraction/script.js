function calculateSubtract(){
    let num1=parseInt(document.getElementById('number-1').value);
    let num2=parseInt(document.getElementById('number-2').value);
    let subtract=num1-num2;
    document.getElementById('answer').innerHTML=`<b><i>Subtract : ${subtract}</i></b>`;
}