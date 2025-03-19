function calculateDivision(){
    let num1=parseInt(document.getElementById('input-1').value);
    let num2=parseInt(document.getElementById('input-2').value);
    let division=num1/num2;
    document.getElementById('answer').innerHTML=`<b>Division : ${division}</b>`;
}