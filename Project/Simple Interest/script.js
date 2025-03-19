function calculateSI(){
    let num1=parseFloat(document.getElementById('input-1').value);
    let num2=parseFloat(document.getElementById('input-2').value);
    let num3=parseFloat(document.getElementById('input-3').value);
    let answer=num1*num2*num3/100;
    document.getElementById('result').innerHTML=`<b>Simple Interest: ${answer} </b>`
}