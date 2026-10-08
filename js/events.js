// Authentication 

// Load users from localStorage
function loadUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

// Save users to localStorage
function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

// Register

const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("regUsername").value;
        const password = document.getElementById("regPassword").value;
        const role = document.getElementById("regRole").value;

        let users = loadUsers();

        // Check if user exists
        if (users.some(u => u.username === username)) {
            alert("Username already exists");
            return;
        }

        // Add new user
        users.push({ username, password, role });
        saveUsers(users);

        alert("Registration successful!");
        window.location.href = "login.html";
    });
}

// Login

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;

        let users = loadUsers();

        const user = users.find(u => u.username === username && u.password === password);

        if (!user) {
            alert("Invalid username or password");
            return;
        }

        // Set cookies
        document.cookie = `loggedInUser=${user.username}; path=/;`;
        document.cookie = `userRole=${user.role}; path=/;`;

        window.location.href = "dashboard.html";
    });
}
