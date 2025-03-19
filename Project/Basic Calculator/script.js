function calculate(exp) {
    let num1 = parseInt(document.getElementById('input-1').value);
    let num2 = parseInt(document.getElementById('input-2').value);
    let result = document.getElementById('answer');
    if (isNaN(num1) || isNaN(num2)) {
        result.innerHTML = `<b>Please enter the number</b>`
    }
    else {
        switch (exp) {
            case '+':
                result.innerHTML = `Sum: ${num1 + num2}`;
                break;
            case '-':
                result.innerHTML = `Sub: ${num1 - num2}`;
                break;
            case '*':
                result.innerHTML = `Multiply: ${num1 * num2}`;
                break;
            case '/':
                result.innerHTML = `Divide: ${num1 / num2}`;
                break;
        }
    }
}