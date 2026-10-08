// Tickets (assitance with openAi)

// Helper: Read cookies
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
}

// Load identity
const username = getCookie("loggedInUser");
const role = getCookie("userRole");

// Redirect if not logged in
if (!username) {
    window.location.href = "login.html";
}

// Display identity on page
document.getElementById("welcomeText").innerText = `Welcome, ${username}`;
document.getElementById("roleText").innerText = `Role: ${role}`;

// User ticket

if (role === "user") {
    document.getElementById("userCreateTicket").style.display = "block";

    const ticketForm = document.getElementById("ticketForm");

    ticketForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = document.getElementById("ticketTitle").value;
        const description = document.getElementById("ticketDescription").value;

        let tickets = JSON.parse(localStorage.getItem("tickets")) || [];

        const newTicket = {
            user: username,
            title,
            description,
            status: "Open"
        };

        tickets.push(newTicket);
        localStorage.setItem("tickets", JSON.stringify(tickets));

        alert("Ticket submitted successfully!");
        ticketForm.reset();
    });
}

// Admin view tickets

if (role === "admin") {
    document.getElementById("adminViewTickets").style.display = "block";

    let tickets = JSON.parse(localStorage.getItem("tickets")) || [];
    const tableBody = document.querySelector("#ticketsTable tbody");

    tickets.forEach(ticket => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${ticket.user}</td>
            <td>${ticket.title}</td>
            <td>${ticket.description}</td>
            <td>${ticket.status}</td>
        `;

        tableBody.appendChild(row);
    });
}
