const usernameInput = document.getElementById("usernameInput")
const emailInput = document.getElementById("emailInput")
const adduserBtn = document.getElementById("adduserBtn")
const userList = document.getElementById("userList")
let users = JSON.parse(localStorage.getItem("users"))||[];
function saveUsers(){
    localStorage.setItem("users",JSON.stringify(users));
}
function addUser(username,email){
    const newUser = {
        id : Date.now(),
        username:username,
        email:email,
    };
    users.push(newUser);
    saveUsers();
    displayUsers();
}
function editUser(userId){
    const user = users.find((u)=>u.id===userId);
    const newUsername = prompt("Edit Username : ", user.username);
    const newEmail = prompt("Edit Email : ", user.email)
    if(newUsername && newEmail){
        user.username=newUsername;
        user.email=newEmail;
    }
    saveUsers();
    displayUsers();
}
function deleteUser(userId){
    users=users.filter((u)=> u.id !==userId);
    saveUsers();
    displayUsers();
}
function displayUsers(){
    userList.innerHTML="";
    users.forEach((user)=>{
        const row = document.createElement("tr")
        row.innerHTML=`
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>
        <button class="btn btn-warning btn-sm" onclick="editUser(${user.id})">Edit</button>
        <button class="btn btn-danger btn-sm" onclick="deleteUser(${user.id})">Delete</button>
        </td>`
        userList.appendChild(row)
    })
}
adduserBtn.onclick=function(){
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    if(username && email){
        addUser(username,email)
        usernameInput.value="";
        emailInput.value="";
    }else{
        alert("Please Enter Username and Email");
    }
}
displayUsers();