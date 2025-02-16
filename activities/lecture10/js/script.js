document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("registrationForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        let firstName = document.getElementById("firstName");
        let lastName = document.getElementById("lastName");
        let email = document.getElementById("email");
        let password = document.getElementById("password");

        // Regular Expressions
        let firstNameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/; // Letters and optional space
        let lastNameRegex = /^[a-zA-Z]+(?:[-'][a-zA-Z]+)*$/; // Letters, apostrophes, hyphens
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Email validation
        let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/; // Strong password

        let valid = true;

        // Function to validate input field and display error styling
        function validateField(field, regex, errorMsg) {
            if (!regex.test(field.value.trim())) {
                field.classList.add("invalid");
                alert(errorMsg);
                valid = false;
            } else {
                field.classList.remove("invalid");
            }
        }

        // Validate each field
        validateField(firstName, firstNameRegex, "Invalid First Name. Only letters and an optional middle name allowed.");
        validateField(lastName, lastNameRegex, "Invalid Last Name. Only letters, apostrophes, and hyphens allowed.");
        validateField(email, emailRegex, "Invalid Email format. Example: user@example.com");
        validateField(password, passwordRegex, "Password must be at least 12 characters long, include an uppercase letter, lowercase letter, a number, and a special character.");

        if (valid) {
            alert("Form submitted successfully!");
            this.submit(); // Submit the form if valid
        }
    });
});
