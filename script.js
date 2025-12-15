// ==============================
// GLOBAL AESTHETIC SETUP
// ==============================
document.body.style.transition = "background 0.4s ease, color 0.4s ease";

// Style the dark mode toggle button
const themeBtn = document.getElementById("themeBtn");
themeBtn.style.cssText = `
    position: fixed;
    top: 15px;
    right: 15px;
    z-index: 1000;
    background: linear-gradient(135deg, #0A1D37, #12325E);
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
    border: none;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

themeBtn.addEventListener("mouseenter", () => {
    themeBtn.style.transform = "translateY(-2px)";
    themeBtn.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
});

themeBtn.addEventListener("mouseleave", () => {
    themeBtn.style.transform = "translateY(0)";
    themeBtn.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
});

// Style all cards
document.querySelectorAll(".card").forEach(card => {
    card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease, background 0.4s ease, color 0.4s ease";
    card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-5px)";
        card.style.boxShadow = "0 12px 30px rgba(0,0,0,0.15)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
    });
});


// ==============================
// PRIMARY BUTTON THEME + RIPPLE - UPDATED
// ==============================
function applyPrimaryButtonTheme(button) {
    if (!button) return; // Safety check
    
    // Skip if it's the theme button (already styled above)
    if (button.id === "themeBtn") return;
    
    // Apply primary button styling
    button.style.cssText = `
        background: linear-gradient(135deg, #0A1D37, #12325E);
        color: white;
        padding: 13px;
        border-radius: 8px;
        border: none;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
        margin: 10px 0;
        position: relative;
        overflow: hidden;
        display: block;
        width: 100%;
        text-align: center;
    `;

    // Hover effects
    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-2px)";
        button.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
        button.style.background = "linear-gradient(135deg, #12325E, #1e4a8a)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0)";
        button.style.boxShadow = "none";
        button.style.background = "linear-gradient(135deg, #0A1D37, #12325E)";
    });

    // Ripple effect
    button.addEventListener("click", e => {
        const ripple = document.createElement("span");
        ripple.style.cssText = `
            position: absolute;
            width: 100px;
            height: 100px;
            background: rgba(255,255,255,0.4);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            left: ${e.offsetX - 50}px;
            top: ${e.offsetY - 50}px;
            pointer-events: none;
        `;
        button.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
}


// ==============================
// A. DARK MODE TOGGLE
// ==============================
themeBtn.onclick = () => {
    document.body.classList.toggle("dark-mode");
    updateDarkModeUI();

    themeBtn.textContent = document.body.classList.contains("dark-mode")
        ? "Switch to Light Mode"
        : "Switch to Dark Mode";
};


// ==============================
// FIX FORM LAYOUT & STYLES
// ==============================
function fixFormStyles() {
    const form = document.querySelector('.message-form');
    if (!form) return;
    
    // Style all form labels
    form.querySelectorAll('label').forEach(label => {
        label.style.display = 'block';
        label.style.marginBottom = '8px';
        label.style.fontWeight = '600';
        label.style.fontSize = '16px';
        label.style.color = 'inherit';
    });
    
    // Fix the main issue: Add CSS for email input field
    const emailField = document.getElementById('emailField');
    if (emailField) {
        emailField.style.cssText = `
            width: 100%;
            padding: 12px;
            margin-bottom: 15px;
            border: 1px solid #cdd7e5;
            border-radius: 6px;
            font-size: 15px;
            background: #f9fbff;
            box-sizing: border-box;
            font-family: inherit;
        `;
    }
    
    // Fix name field styling too
    const nameField = document.getElementById('nameField');
    if (nameField) {
        nameField.style.cssText = `
            width: 100%;
            padding: 12px;
            margin-bottom: 15px;
            border: 1px solid #cdd7e5;
            border-radius: 6px;
            font-size: 15px;
            background: #f9fbff;
            box-sizing: border-box;
            font-family: inherit;
        `;
    }
    
    // Fix textarea
    const textarea = document.getElementById('msgBox');
    if (textarea) {
        textarea.style.cssText = `
            width: 100%;
            min-height: 120px;
            padding: 12px;
            margin-bottom: 10px;
            border: 1px solid #cdd7e5;
            border-radius: 6px;
            font-size: 15px;
            background: #f9fbff;
            resize: vertical;
            box-sizing: border-box;
            font-family: inherit;
        `;
    }
    
    // Fix character counter paragraph
    const counterParagraph = form.querySelector('p');
    if (counterParagraph) {
        counterParagraph.style.marginBottom = '15px';
        counterParagraph.style.fontSize = '14px';
    }
    
    // Add focus effects to all form inputs
    form.querySelectorAll('input, textarea').forEach(el => {
        // Remove any existing event listeners to avoid duplicates
        const newEl = el.cloneNode(true);
        el.parentNode.replaceChild(newEl, el);
        
        newEl.addEventListener('focus', () => {
            newEl.style.borderColor = '#0A1D37';
            newEl.style.outline = 'none';
            newEl.style.boxShadow = '0 0 0 2px rgba(10, 29, 55, 0.1)';
        });
        
        newEl.addEventListener('blur', () => {
            newEl.style.borderColor = '#cdd7e5';
            newEl.style.boxShadow = 'none';
        });
    });
}


// ==============================
// DARK MODE UI FIX - UPDATED FOR BUTTONS
// ==============================
function updateDarkModeUI() {
    const dark = document.body.classList.contains("dark-mode");

    // Update body
    document.body.style.background = dark ? "#0f172a" : "#F2F4F7";
    document.body.style.color = dark ? "#e2e8f0" : "#333";

    // Update cards
    document.querySelectorAll(".card").forEach(card => {
        card.style.background = dark ? "#1e293b" : "white";
        card.style.color = dark ? "#e2e8f0" : "#333";
    });

    // Update all text elements
    document.querySelectorAll("p, h1, h2, h3, h4, label, li, .job-title").forEach(el => {
        el.style.color = dark ? "#e2e8f0" : "";
    });

    // Update section titles
    document.querySelectorAll(".section-title").forEach(el => {
        el.style.color = dark ? "#93c5fd" : "#0A1D37";
    });

    // Update form labels
    document.querySelectorAll('.message-form label').forEach(label => {
        label.style.color = dark ? "#e2e8f0" : "#333";
    });

    // Update form inputs
    document.querySelectorAll('.message-form input[type="text"], .message-form input[type="email"], .message-form textarea').forEach(el => {
        el.style.background = dark ? "#0f172a" : "#f9fbff";
        el.style.color = dark ? "#e2e8f0" : "#333";
        el.style.borderColor = dark ? "#475569" : "#cdd7e5";
        
        // Update placeholder color
        el.style.setProperty('--placeholder-color', dark ? '#94a3b8' : '#64748b');
    });

    // Update character counter
    const counter = document.getElementById('counter');
    if (counter) {
        counter.style.color = dark ? "#cbd5e1" : "#333";
    }

    // Update submit button
    const submitButton = document.querySelector('.message-form input[type="submit"]');
    if (submitButton) {
        if (dark) {
            submitButton.style.background = "linear-gradient(135deg, #1e40af, #3b82f6)";
            submitButton.style.color = "white";
        } else {
            submitButton.style.background = "#0A1D37";
            submitButton.style.color = "white";
        }
    }

    // ==============================
    // IMPORTANT: Update "Edit Job Title" and "Hide Skills" buttons
    // ==============================
    const editJobBtn = document.getElementById("editJobBtn");
    const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
    
    if (editJobBtn) {
        if (dark) {
            editJobBtn.style.background = "linear-gradient(135deg, #1e40af, #3b82f6)";
        } else {
            editJobBtn.style.background = "linear-gradient(135deg, #0A1D37, #12325E)";
        }
    }
    
    if (toggleSkillsBtn) {
        if (dark) {
            toggleSkillsBtn.style.background = "linear-gradient(135deg, #1e40af, #3b82f6)";
        } else {
            toggleSkillsBtn.style.background = "linear-gradient(135deg, #0A1D37, #12325E)";
        }
    }

    // Update contact links
    document.querySelectorAll("#contact a").forEach(link => {
        link.style.color = dark ? "#93c5fd" : "#12325E";
    });

    // Update skills list
    document.querySelectorAll(".skills-list li").forEach(li => {
        li.style.background = dark ? "#334155" : "#E8EEF7";
        li.style.borderLeftColor = dark ? "#6366f1" : "#0A1D37";
    });

    // Update profile image
    const profileImg = document.querySelector(".profile-img");
    if (profileImg) {
        profileImg.style.borderColor = dark ? "#6366f1" : "#0A1D37";
    }

    // Update navbar
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        navbar.style.background = dark ? "#1e293b" : "#0A1D37";
    }

    // Update footer
    const footer = document.querySelector("footer");
    if (footer) {
        footer.style.background = dark ? "#1e293b" : "#0A1D37";
    }

    // Update dark mode toggle button
    if (dark) {
        themeBtn.style.background = "linear-gradient(135deg, #1e40af, #3b82f6)";
    } else {
        themeBtn.style.background = "linear-gradient(135deg, #0A1D37, #12325E)";
    }
}


// ==============================
// B. CUSTOM MODAL (EDIT JOB TITLE)
// ==============================
const editJobBtn = document.getElementById("editJobBtn");
const jobTitle = document.getElementById("jobTitle");

// Apply styling to Edit Job Title button
if (editJobBtn) {
    applyPrimaryButtonTheme(editJobBtn);
}

const modal = document.createElement("div");
modal.style.cssText = `
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.7);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    backdrop-filter: blur(3px);
`;

modal.innerHTML = `
    <div class="modal-content" style="
        background: white;
        padding: 30px;
        border-radius: 16px;
        width: 90%;
        max-width: 400px;
        text-align: center;
        box-shadow: 0 20px 40px rgba(0,0,0,0.2);
    ">
        <h3 style="margin-bottom: 20px; color: #0A1D37;">Edit Job Title</h3>
        <input id="jobInput" type="text" style="
            width: 100%;
            padding: 14px;
            border-radius: 8px;
            margin: 15px 0 25px 0;
            border: 2px solid #e2e8f0;
            background: #f8fafc;
            font-size: 16px;
            box-sizing: border-box;
        " placeholder="Enter new job title">
        <button id="saveJob">Save Changes</button>
    </div>
`;

document.body.appendChild(modal);
applyPrimaryButtonTheme(modal.querySelector("#saveJob"));

if (editJobBtn) {
    editJobBtn.onclick = () => {
        modal.style.display = "flex";
        modal.querySelector("#jobInput").value = jobTitle.textContent;
        modal.querySelector("#jobInput").focus();
    };
}

modal.onclick = e => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};

modal.querySelector("#saveJob").onclick = () => {
    const value = modal.querySelector("#jobInput").value.trim();
    if (value) {
        jobTitle.textContent = value;
        showToast("Job title updated successfully!");
    }
    modal.style.display = "none";
};


// ==============================
// C. SHOW / HIDE SKILLS
// ==============================
const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
const skillsSection = document.getElementById("skillsSection");

// Apply styling to Hide Skills button
if (toggleSkillsBtn) {
    applyPrimaryButtonTheme(toggleSkillsBtn);
}

if (skillsSection) {
    skillsSection.style.cssText = `
        transition: max-height 0.4s ease, opacity 0.4s ease, padding 0.4s ease;
        overflow: hidden;
        max-height: 500px;
        opacity: 1;
    `;
}

if (toggleSkillsBtn) {
    toggleSkillsBtn.onclick = () => {
        const hidden = skillsSection.style.maxHeight === "0px" || skillsSection.style.maxHeight === "";
        skillsSection.style.maxHeight = hidden ? "500px" : "0px";
        skillsSection.style.opacity = hidden ? "1" : "0";
        skillsSection.style.padding = hidden ? "25px" : "0 25px";
        toggleSkillsBtn.textContent = hidden ? "Hide Skills" : "Show Skills";
    };
}


// ==============================
// D. LIVE CHARACTER COUNTER
// ==============================
const msgBox = document.getElementById("msgBox");
const counter = document.getElementById("counter");

if (msgBox && counter) {
    msgBox.oninput = () => {
        const remaining = 200 - msgBox.value.length;
        counter.textContent = remaining;
        counter.style.color =
            remaining < 50 ? "#ef4444" :
            remaining < 100 ? "#f97316" : "#10b981";
    };
}


// ==============================
// E. TOAST NOTIFICATION
// ==============================
const toast = document.createElement("div");
toast.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #0A1D37;
    color: white;
    padding: 16px 24px;
    border-radius: 12px;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    z-index: 9999;
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    transform: translateY(20px);
    font-weight: 500;
    max-width: 300px;
`;
document.body.appendChild(toast);

function showToast(msg) {
    toast.textContent = msg;
    toast.style.opacity = "1";
    toast.style.transform = "translateY(0)";
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(20px)";
    }, 2500);
}


// ==============================
// FORM VALIDATION
// ==============================
function validateForm() {
    const name = document.getElementById("nameField");
    const email = document.getElementById("emailField");
    const message = document.getElementById("msgBox");

    if (!name.value.trim()) {
        showToast("Please enter your name");
        name.focus();
        return false;
    }
    
    if (!email.value.trim()) {
        showToast("Please enter your email");
        email.focus();
        return false;
    }
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        showToast("Please enter a valid email address");
        email.focus();
        return false;
    }
    
    if (!message.value.trim()) {
        showToast("Please enter your message");
        message.focus();
        return false;
    }

    showToast("Message sent successfully! ✓");
    
    // Reset form after successful submission
    setTimeout(() => {
        name.value = "";
        email.value = "";
        message.value = "";
        counter.textContent = "200";
        counter.style.color = "#10b981";
    }, 1000);
    
    return false; // Changed to false to prevent actual form submission for demo
}


// ==============================
// F. DATE DISPLAY
// ==============================
const dateDisplay = document.getElementById("dateDisplay");
if (dateDisplay) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.textContent = new Date().toLocaleDateString('en-US', options);
    dateDisplay.style.opacity = "0.8";
    dateDisplay.style.marginBottom = "5px";
}


// ==============================
// RIPPLE ANIMATION KEYFRAME
// ==============================
const style = document.createElement("style");
style.innerHTML = `
@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}

/* Fix for email input placeholder in dark mode */
input[type="email"]::placeholder,
input[type="text"]::placeholder,
textarea::placeholder {
    color: var(--placeholder-color, #94a3b8);
    opacity: 0.8;
}

/* Add some spacing for the dark mode button */
body {
    padding-top: 10px;
}

/* Ensure buttons inside cards have proper spacing */
#home button, 
#skillsSection + button {
    margin-top: 15px;
}

/* Style for the modal save button */
#saveJob {
    width: 100%;
    margin-top: 10px;
}
`;
document.head.appendChild(style);


// ==============================
// INITIAL SETUP - UPDATED
// ==============================
document.addEventListener('DOMContentLoaded', function() {
    // ======================================
    // IMPORTANT: Ensure buttons are styled on page load
    // ======================================
    
    // Style Edit Job Title button
    const editJobBtn = document.getElementById("editJobBtn");
    if (editJobBtn) {
        applyPrimaryButtonTheme(editJobBtn);
    }
    
    // Style Hide Skills button
    const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
    if (toggleSkillsBtn) {
        applyPrimaryButtonTheme(toggleSkillsBtn);
    }
    
    // Fix form styles (this solves the email field issue)
    fixFormStyles();
    
    // Initialize dark mode UI
    updateDarkModeUI();
    
    // Add ripple effect to submit button
    const submitBtn = document.querySelector('.message-form input[type="submit"]');
    if (submitBtn) {
        submitBtn.addEventListener("click", function(e) {
            const rect = submitBtn.getBoundingClientRect();
            const ripple = document.createElement("span");
            ripple.style.cssText = `
                position: absolute;
                width: 100px;
                height: 100px;
                background: rgba(255,255,255,0.4);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                left: ${e.clientX - rect.left - 50}px;
                top: ${e.clientY - rect.top - 50}px;
                pointer-events: none;
            `;
            
            submitBtn.style.position = "relative";
            submitBtn.style.overflow = "hidden";
            
            submitBtn.appendChild(ripple);
            setTimeout(() => {
                if (ripple.parentNode === submitBtn) {
                    ripple.remove();
                }
            }, 600);
        });
    }
    
    // Add hover effect to submit button
    if (submitBtn) {
        submitBtn.addEventListener("mouseenter", () => {
            if (document.body.classList.contains("dark-mode")) {
                submitBtn.style.background = "linear-gradient(135deg, #2563eb, #60a5fa)";
            } else {
                submitBtn.style.background = "#12325E";
            }
        });
        
        submitBtn.addEventListener("mouseleave", () => {
            if (document.body.classList.contains("dark-mode")) {
                submitBtn.style.background = "linear-gradient(135deg, #1e40af, #3b82f6)";
            } else {
                submitBtn.style.background = "#0A1D37";
            }
        });
    }
    
    // Add hover effects to Edit Job Title and Hide Skills buttons
    const buttonsToStyle = [editJobBtn, toggleSkillsBtn];
    buttonsToStyle.forEach(btn => {
        if (btn) {
            // Add dark mode hover effect updates
            const updateButtonHover = () => {
                const dark = document.body.classList.contains("dark-mode");
                btn.addEventListener("mouseenter", () => {
                    if (dark) {
                        btn.style.background = "linear-gradient(135deg, #2563eb, #60a5fa)";
                    } else {
                        btn.style.background = "linear-gradient(135deg, #12325E, #1e4a8a)";
                    }
                });
                
                btn.addEventListener("mouseleave", () => {
                    if (dark) {
                        btn.style.background = "linear-gradient(135deg, #1e40af, #3b82f6)";
                    } else {
                        btn.style.background = "linear-gradient(135deg, #0A1D37, #12325E)";
                    }
                });
            };
            
            updateButtonHover();
            
            // Update hover effects when dark mode changes
            document.addEventListener('darkModeChange', updateButtonHover);
        }
    });
});