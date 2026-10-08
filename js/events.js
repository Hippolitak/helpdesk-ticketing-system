// Event Driven Progamming (assitance with openAi)

// Helper: Read cookies
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
}

// Page load event 

document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded and DOM ready");

    const username = getCookie("loggedInUser");
    const role = getCookie("userRole");

    // If logged in, show identity in console (Event-driven)
    if (username) {
        console.log(`Logged in as: ${username} (${role})`);
    }
});

// Logout event 

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        // Clear cookies
        document.cookie = "loggedInUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "userRole=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

        alert("You have been logged out");
        window.location.href = "login.html";
    });
}

const logoutBtnNav = document.getElementById("logoutBtnNav");

if (logoutBtnNav) {
    logoutBtnNav.addEventListener("click", () => {
        document.cookie = "loggedInUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "userRole=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = "login.html";
    });
}
