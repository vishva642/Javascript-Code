function calculateES(){
    let num1=parseFloat(document.getElementById('input-1').value);
    let num2=parseFloat(document.getElementById('input-2').value);
    let num3=parseFloat(document.getElementById('input-3').value);
    let num4=parseFloat(document.getElementById('input-4').value);
    let num5=parseFloat(document.getElementById('input-5').value);
    let result=num1-num2+num3-num4-num5;
    document.getElementById('answer').innerHTML=`<b>Employee's Net Salary : ${result}</b>`
}