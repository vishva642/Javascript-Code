let oldpassword=1234;
oldpassword=parseInt(prompt("Enter new password!"));
alert("Password change");
let userpassword=parseInt(prompt("Enter password"));
if(oldpassword==userpassword){
    alert("Successfully login!");
}
else{
    alert("Incorrect password");
}