function calculate() {
    let marks = parseInt(document.getElementById('input-1').value);
    let result = document.getElementById('answer');
    if (isNaN(marks) ) {
        result.innerHTML = `<b>Please enter the number</b>`
    }
    else {
        if ((marks <= 100) && (marks > 90)) {
            result.innerHTML=`<b>Grade:A</b>`;
        }
        else if ((marks <= 89) && (marks > 80)) {
            result.innerHTML=`<b>Grade:B</b>`;
        }
        else if ((marks <= 79) && (marks > 61)) {
            result.innerHTML=`<b>Grade:C</b>`;
        }
        else if ((marks <= 60) && (marks > 46)) {
            result.innerHTML=`<b>Grade:D</b>`;
        }
        else if ((marks <= 45) && (marks > 34)) {
            result.innerHTML=`<b>Grade:E</b>`;
        }
        else {
            result.innerHTML=`<b>Grade:F</b>`;
        }
    }
}