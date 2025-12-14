// ==============================
// A. DARK MODE TOGGLE
// ==============================
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});


// ==============================
// B. EDIT JOB TITLE
// ==============================
const editJobBtn = document.getElementById("editJobBtn");
const jobTitle = document.getElementById("jobTitle");

editJobBtn.addEventListener("click", function () {
    const newTitle = prompt("Enter new job title:");
    if (newTitle !== null && newTitle !== "") {
        jobTitle.textContent = newTitle;
    }
});


// ==============================
// C. SHOW / HIDE SKILLS
// ==============================
const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
const skillsSection = document.getElementById("skillsSection");

toggleSkillsBtn.addEventListener("click", function () {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        toggleSkillsBtn.textContent = "Hide Skills";
    } else {
        skillsSection.style.display = "none";
        toggleSkillsBtn.textContent = "Show Skills";
    }
});


// ==============================
// D. LIVE CHARACTER COUNTER
// ==============================
const msgBox = document.getElementById("msgBox");
const counter = document.getElementById("counter");

msgBox.addEventListener("keyup", function () {
    const remaining = 200 - msgBox.value.length;
    counter.textContent = remaining;
});


// ==============================
// E. FORM VALIDATION
// ==============================
function validateForm() {
    const name = document.getElementById("nameField").value.trim();
    const email = document.getElementById("emailField").value.trim();

    if (name === "" || email === "") {
        alert("Please fill in both Name and Email fields.");
        return false;
    }
    return true;
}


// ==============================
// F. DISPLAY TODAY'S DATE
// ==============================
const dateDisplay = document.getElementById("dateDisplay");
const today = new Date();
dateDisplay.textContent = "Today's Date: " + today.toDateString();


// ==============================
// G. EXTRA FEATURE – RANDOM QUOTE
// ==============================
function generateQuote() {
    const quotes = [
        "Code is like humor. When you have to explain it, it’s bad.",
        "First, solve the problem. Then, write the code.",
        "Experience is the name everyone gives to their mistakes.",
        "JavaScript is the duct tape of the Internet."
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}
