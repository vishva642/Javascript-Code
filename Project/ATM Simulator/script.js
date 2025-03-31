let balance = 1000;
const correctPin = "1234";

function authenticate() {
    const pin = document.getElementById("pinInput").value;
    if (pin === correctPin) {
        document.getElementById("screen").style.display = "none";
        document.getElementById("options").style.display = "block";
    } else {
        document.getElementById("message").innerText = "Incorrect PIN! Try again.";
    }
}

function checkBalance() {
    alert("Your balance is: $" + balance);
}

function deposit() {
    let amount = parseFloat(prompt("Enter amount to deposit:"));
    if (amount > 0) {
        balance += amount;
        alert("Deposit successful! New balance: $" + balance);
    } else {
        alert("Invalid amount.");
    }
}

function withdraw() {
    let amount = parseFloat(prompt("Enter amount to withdraw:"));
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        alert("Withdrawal successful! New balance: $" + balance);
    } else {
        alert("Invalid amount or insufficient funds.");
    }
}

function logout() {
    document.getElementById("options").style.display = "none";
    document.getElementById("screen").style.display = "block";
    document.getElementById("pinInput").value = "";
    document.getElementById("message").innerText = "";
}