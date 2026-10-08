
// Register User
document.addEventListener("DOMContentLoaded", () => {

    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");

// Registration
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const username = document.getElementById("regUsername").value;
            const password = document.getElementById("regPassword").value;
            const role = document.getElementById("regRole").value;

            let users = JSON.parse(localStorage.getItem("users")) || [];

            // Check if user already exists
            const exists = users.some(u => u.username === username);

            if (exists) {
                alert("Username already exists!");
                return;
            }

            // Save new user
            users.push({ username, password, role });
            localStorage.setItem("users", JSON.stringify(users));

            alert("Registration successful!");
            window.location.href = "login.html";
        });
    }

    // Handle Login
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            let users = JSON.parse(localStorage.getItem("users")) || [];

            const user = users.find(u => u.username === username && u.password === password);

            if (!user) {
                alert("Invalid username or password");
                return;
            }

            // Set cookie for virtual identity
            document.cookie = `loggedInUser=${user.username}; path=/`;
            document.cookie = `userRole=${user.role}; path=/`;

            alert("Login successful!");

            // Redirect based on role
            window.location.href = "dashboard.html";
        });
    }
});

// Authentication implementation developed with assistance from ChatGPT.
// Guidance and generated code for auth validation for registering and login and storage.
