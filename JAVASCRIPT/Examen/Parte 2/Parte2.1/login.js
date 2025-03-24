function login(username, password) {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let data = {username: username, password: password};
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/login", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
    xhr.onload = function(){
        if(username === "admin" && password === "admin"){
            console.log("Login Success");
            window.location.href = "/home";
            }
            }
           
}
function logout() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/logout", true);
}