// Interoperability: External API (assistance of open Ai)

// Fetch sample user data from JSONPlaceholder API
async function fetchExternalUserData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await response.json();

        console.log("External API Data Loaded:", data);

        // Display on dashboard if element exists
        const apiBox = document.getElementById("apiData");

        if (apiBox) {
            apiBox.innerHTML = `
                <h3>External User Info (API)</h3>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Company:</strong> ${data.company.name}</p>
            `;
        }

    } catch (error) {
        console.error("API Error:", error);
    }
}

// Run API fetch when page loads
document.addEventListener("DOMContentLoaded", fetchExternalUserData);
