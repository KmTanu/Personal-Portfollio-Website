document.getElementById("login-btn").addEventListener("click", function() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("login-msg");


  if(username === "Tanu" && password === "12345") {
    msg.style.color = "green";
    msg.innerText = "Login successful! Redirecting...";

  
    window.location.href = "index.html";  

  } else {
    msg.style.color = "red";
    msg.innerText = "Invalid username or password!";
  }
});