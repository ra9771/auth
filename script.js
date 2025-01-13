document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
  
    // Mock authentication logic
    if (username === "user" && password === "carbon123") {
      alert("Login successful! Redirecting to dashboard...");
      errorMessage.style.display = "none";
      window.location.href = "dashboard.html"; // Replace with the actual dashboard page
    } else {
      errorMessage.textContent = "Invalid username or password.";
      errorMessage.style.display = "block";
    }
  });
  