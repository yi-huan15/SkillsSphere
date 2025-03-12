document.addEventListener("DOMContentLoaded", function () {
    const app = document.getElementById("app");

    // Header
    const header = document.createElement("header");
    header.className = "header";
    header.innerHTML = `
        <div class="logo">
            <img src="logo.png" alt="SkillSphere Logo" class="logo-img">
            <h1>SkillSphere</h1>
        </div>
        <input type="text" placeholder="What skills do you want to learn?" class="search-bar">
        <div class="icons">
            <button>🔔</button>
            <button>📧</button>
            <button>❤️</button>
            <button>🏠</button>
            <button>🌍 English</button>
            <button>👤</button>
        </div>
    `;

    // Navigation Bar
    const nav = document.createElement("nav");
    nav.className = "nav-bar";
    const navItems = [
        "Skills Test Platform",
        "Upload Video",
        "AI Resume Optimizer",
        "Consulting",
        "Find User",
    ];
    navItems.forEach((item) => {
        const button = document.createElement("button");
        button.textContent = item;
        button.className = "nav-button";
        nav.appendChild(button);
    });

    // Recommended Section
    const recommendedSection = document.createElement("section");
    recommendedSection.className = "recommended";
    recommendedSection.innerHTML = `
        <h2>Recommended for You</h2>
        <div class="scroll-container">
            <img src="weather_app.png" alt="Weather App">
            <img src="python_notes.png" alt="Python Notes">
            <img src="html_course.png" alt="HTML Full Course">
            <img src="improve_logic.png" alt="Improve Logic">
        </div>
    `;

    // Popular Learning Skills Section
    const skillsSection = document.createElement("section");
    skillsSection.className = "skills";
    skillsSection.innerHTML = `<h2>Popular Learning Skills</h2>`;
    const skills = [
        "Programming and Tech",
        "Graphics and Design",
        "Digital Marketing",
        "Language",
        "Video and Animation",
    ];
    const grid = document.createElement("div");
    grid.className = "skills-grid";
    skills.forEach((skill) => {
        const skillDiv = document.createElement("div");
        skillDiv.className = "skill-item";
        skillDiv.textContent = skill;
        grid.appendChild(skillDiv);
    });
    skillsSection.appendChild(grid);

    // Append elements to the app
    app.appendChild(header);
    app.appendChild(nav);
    app.appendChild(recommendedSection);
    app.appendChild(skillsSection);
});
