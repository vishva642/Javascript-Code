function calculateSum(){
    let num1=parseInt(document.getElementById('input-1').value);
    let num2=parseInt(document.getElementById('input-2').value);
    let sum=num1+num2;
    document.getElementById('answer').innerHTML=`<i>Sum : ${sum}</i>`;
}