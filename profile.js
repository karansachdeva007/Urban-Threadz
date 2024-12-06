document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("profileForm");
    const progress = document.querySelector(".progress");
    const inputs = form.querySelectorAll("input, select, textarea");
    const submitBtn = document.getElementById("submitBtn");

    const profileDisplay = document.getElementById("profileDisplay");

    window.addEventListener("load", function () {
        const savedData = JSON.parse(localStorage.getItem("profileData"));
        if (savedData) {
            populateForm(savedData);
            displayProfile(savedData);
        }
    });

    window.addEventListener("load", function () {
        const savedData = JSON.parse(localStorage.getItem("profileData"));
    
        if (savedData) {
            document.getElementById("name").value = savedData.name || "";
            document.getElementById("contact").value = savedData.contact || "";
            document.getElementById("email").value = savedData.email || "";
            document.getElementById("password").value = savedData.password || "";
            document.getElementById("confirmPassword").value = savedData.password || "";
            document.getElementById("city").value = savedData.city || "";
            document.getElementById("feedback").value = savedData.feedback || "";
    
            if (savedData.gender) {
                document.querySelector(`input[name="Gender"][value="${savedData.gender}"]`).checked = true;
            }
        }
    });

    function displayProfile(data) {
        profileDisplay.innerHTML = `
            <h2>Profile Details</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Contact:</strong> ${data.contact}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>City:</strong> ${data.city}</p>
            <p><strong>Gender:</strong> ${data.gender}</p>
            <p><strong>Feedback:</strong> ${data.feedback}</p>
        `;
        profileDisplay.style.display = "block"; // Make the profile display visible
    }


    // Function to validate form inputs
    function validateForm() {
        let isValid = true;
        const name = document.getElementById("name");
        const contact = document.getElementById("contact");
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const confirmPassword = document.getElementById("confirmPassword");

        // Simple validation for empty fields and password confirmation
        if (name.value.trim() === "") {
            showError(name);
            isValid = false;
        }
        if (contact.value.trim() === "") {
            showError(contact);
            isValid = false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            showError(email);
            alert("Please enter a valid email address.");
            isValid = false;
        }
        
        if (password.value.trim() === "" || password.value !== confirmPassword.value) {
            showError(password);
            showError(confirmPassword);
            isValid = false;
        }

        return isValid;
    }

    // Show error animation for invalid input
    function showError(input) {
        input.classList.add("error");
        setTimeout(() => input.classList.remove("error"), 300);
    }

    // Update progress bar as user fills form
    function updateProgress() {
        let filledFields = 0;
        inputs.forEach((input) => {
            if (input.type !== "submit" && input.value.trim() !== "") {
                filledFields++;
            }
        });

        const progressPercentage = (filledFields / (inputs.length - 1)) * 100;
        progress.style.width = `${progressPercentage}%`;
    }

    // Trigger background color change on form submit
    function changeBackgroundColor() {
        document.body.style.backgroundColor = "#e0ffe0"; // Light green on submit
        setTimeout(() => {
            document.body.style.backgroundColor = ""; // Reset to original after 2 seconds
        }, 2000);
    }

     // Save form data to localStorage
     function saveFormData() {
        const profileData = {
            name: document.getElementById("name").value,
            contact: document.getElementById("contact").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            gender: document.querySelector('input[name="Gender"]:checked')?.value || "",
            city: document.getElementById("city").value,
            feedback: document.getElementById("feedback").value,
        };

        localStorage.setItem("profileData", JSON.stringify(profileData));
        // Save the user's name separately for the index page
        localStorage.setItem("userName", profileData.name);
        return profileData;
    }





// Form submission event
form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (validateForm()) {
        changeBackgroundColor();
        alert("Form submitted successfully!");
        // Perform actual form submission if needed here
    } else {
        alert("Please fill in all required fields correctly.");
    }
});

// Update progress bar in real-time as user fills in the form
inputs.forEach((input) => {
    input.addEventListener("input", updateProgress);
});

// Log out functionality
// window.logOut = function () {
//     // alert("You have logged out.");
//     // Add log out functionality here (like redirecting to a login page)
// };
});
// profile.js

document.getElementById("profileForm").addEventListener("submit", function (event) {
event.preventDefault(); // Prevent default form submission

// Get the name input value
const name = document.getElementById("name").value;

// Validate name input
if (!name.trim()) {
    alert("Please enter your name!");
    return;
}

// Store the name in localStorage
localStorage.setItem("userName", name);

// Redirect to the home page
window.location.href = "index.html";
});

// profile.js
function logOut() {
    // Clear localStorage
    localStorage.removeItem("profileData");
    localStorage.setItem("userName", "Add User"); // Reset user name to placeholder
    // Reset the form fields
    document.getElementById("profileForm").reset();
    // const profileDisplay = document.getElementById("profileDisplay");
    // profileDisplay.innerHTML = ""; // Clear profile details
    // profileDisplay.style.display = "none"; // Hide the profile display section

    alert("You have logged out. Profile details cleared.");
}




