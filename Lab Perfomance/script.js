const correctUser = "jawad";
const correctPass = "0000";


let attemptsLeft = 3;

function checkLogin() {
   
    let userInput = document.getElementById("username").value;
    let passInput = document.getElementById("password").value;
    let messageElement = document.getElementById("message");

   
  
    if (userInput == correctUser && passInput == correctPass) {
        messageElement.style.color = "green";
        messageElement.innerHTML = "Login Successful! Welcome.";
    } else {
        
        attemptsLeft--;     

        if (attemptsLeft > 0) {
            messageElement.innerHTML = `Wrong username or password. You have ${attemptsLeft} attempts left.`;
        } else {
            messageElement.style.color = "red";
            messageElement.innerHTML = "Account locked. 0 attempts left!";
        }
    }
}