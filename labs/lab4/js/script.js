// Simulated database using localStorage
const users = JSON.parse(localStorage.getItem("users")) || {};

// Save users to localStorage
const saveUsers = () => localStorage.setItem("users", JSON.stringify(users));

// Ensure DOM elements are loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and script running"); // Debugging

    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");

    if (registerForm) {
        registerForm.addEventListener("submit", async (event) => {
            event.preventDefault();
            console.log("Register button clicked!"); // Debugging

            const { email, username, password, confirmPassword } = getFormValues("register");
            console.log({ email, username, password, confirmPassword }); // Debugging

            try {
                validateInputs(email, username, password, confirmPassword);
                if (users[username]) throw new Error("Username already exists!");

                users[username] = password;
                saveUsers();
                alert("Registration successful!");

                // Redirect to login.html inside the src/ folder
                window.location.replace("login.html");
            } catch (error) {
                alert(error.message);
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", async (event) => {
            event.preventDefault();
            console.log("Login button clicked!"); // Debugging

            const { username, password } = getFormValues("login");

            try {
                if (!users[username] || users[username] !== password) throw new Error("Invalid username or password.");
                alert("Login successful!");
            } catch (error) {
                alert(error.message);
            }
        });
    }
});

// Get Form Values using Destructuring
const getFormValues = (type) => {
    return type === "register"
        ? {
            email: document.getElementById("email").value,
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
            confirmPassword: document.getElementById("confirmPassword").value
        }
        : {
            username: document.getElementById("loginUsername").value,
            password: document.getElementById("loginPassword").value
        };
};

const validateInputs = (email, username, password, confirmPassword) => {
    email = email.trim();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) throw new Error("Invalid email format.");
    
    const usernamePattern = /^[a-zA-Z][a-zA-Z0-9_]{4,}$/;
    if (!usernamePattern.test(username)) throw new Error("Invalid username format.");
    
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
    if (!passwordPattern.test(password)) throw new Error("Password does not meet requirements.");
    
    if (password !== confirmPassword) throw new Error("Passwords do not match.");
};

// Security: Redirect if accessed directly
const protectRoute = () => {
    if (document.referrer === "") {
        window.location.href = "index.html";
    }
};