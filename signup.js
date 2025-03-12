document.addEventListener("DOMContentLoaded", function () {
    const app = document.getElementById("app");

    // Header
    const header = document.createElement("header");
    header.innerHTML = `
        <div class="logo">
            <img src="final_logo.png" alt="SkillSphere Logo">
            <span>SkillSphere</span>
        </div>
        <input type="text" placeholder="What skills do you want to learn?" class="search-bar">
        <div class="icons">
            <span>&#128276;</span>  
            <span>&#9993;</span>  
            <span>&#9829;</span>  
            <span>&#8962;</span>  
            <span>&#127760; English</span>
            <span class="profile-icon">&#128100;</span>
        </div>
    `;

    // Navigation
    const nav = document.createElement("nav");
    nav.innerHTML = `
        <button><a href="#">Skills Test Platform</a></button>
        <button><a href="#">Upload Video</a></button>
        <button><a href="#">AI Resume Optimizer</a></button>
        <button><a href="#">Consulting</a></button>
        <button><a href="#">Find User</a></button>
    `;

    // Signup Section
    const signupSection = document.createElement("section");
    signupSection.className = "signup";
    signupSection.innerHTML = `
        <h3>Start your journey</h3>
        <h2>Sign up to SkillSphere</h2>
        <div class="form-container">
            <form id="signupForm">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required><br><br>
                
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required><br><br>
                
                <button type="submit" class="signup-btn">Sign Up</button>
            </form>
        </div>
        <p>Have an account? <a href="#">Sign in</a></p>
    `;

    // Handle Form Submission
    signupSection.querySelector("#signupForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email && password) {
            alert(`Welcome to SkillSphere, ${email}!`);
            document.getElementById("signupForm").reset(); // Clear form after submission
        } else {
            alert("Please fill in all fields.");
        }
    });

    // Append all sections to the main app container
    app.appendChild(header);
    app.appendChild(nav);
    app.appendChild(signupSection);
});
