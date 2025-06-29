 function verifyLogin() {
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      const errorMsg = document.getElementById("error-message");

      if (username === "Spongebob" && password === "Squarepants") {
        alert("Login successful!");
        errorMsg.textContent = "";
      } else {
        errorMsg.textContent = "Username or password is invalid";
        errorMsg.style.color = "red";
      }
    }