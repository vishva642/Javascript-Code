function calculateBI(){
    let num1=parseFloat(document.getElementById(input-1).value);
    let num2=parseFloat(document.getElementById(input-2).value);
    let answer=num1-(num1*num2/100);
    document.getElementById('result').innerHTML=`<b>Bill:${answer}</b>`;
}