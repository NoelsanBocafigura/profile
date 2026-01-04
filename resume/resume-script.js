// Theme Toggle Logic
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeBtn.textContent = isDark ? "☀️ Light Mode" : "🌓 Toggle Dark Mode";
});

// Dropdown Navigation Logic
const jumpDropdown = document.getElementById('section-jump');
jumpDropdown.addEventListener('change', (e) => {
    const targetId = e.target.value;
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
        // Adjust this offset based on your sticky header height
        const offset = 140; 
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
});

// Copy Design Function
document.getElementById('copy-design').addEventListener('click', () => {
    const htmlSnippet = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Noelsan M. Bocafigura | Resume</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header class="header">
        <h1 class="header-title">Noelsan M. Bocafigura's Resume</h1>
    </header>
    
    <nav class="nav">
        <div class="nav-inner">
            <select id="section-jump" class="nav-dropdown">
                <option value="" disabled selected>Navigate to...</option>
                <option value="name">Name</option>
                <option value="objective">Objective</option>
                <option value="skills">Technical Skills</option>
                <option value="experience">Work Experience</option>
                <option value="education">Education & Affiliations</option>
            </select>

            <button class="nav-btn" id="theme-toggle">🌓 Toggle Dark Mode</button>
            <button class="nav-btn" onclick="window.print()">📥 Download PDF</button>
            <button class="nav-btn" id="copy-design">📄 Copy Design</button>
        </div>
    </nav>
    
    <main class="main-space">
        <div class="profile-pic-container">
            <img src="images/profile-pic.jpg" alt="Profile Picture" class="profile-pic">
        </div>

        <section id="name" class="text-block">
            <h3>Noelsan M. Bocafigura</h3>
            <p>Himamaylan City, Negros Occidental | 09995608349 | ginoongnoelsan839@gmail.com</p>
        </section>
        
        <section id="objective" class="text-block">
            <h3>Objective</h3>
            <p>A disciplined BSIT student and Red Cross Youth (RCY) member with a background in manual labor and food service. Seeking a retail position to apply technical proficiency, strong observational skills, and a proven work ethic to support store operations and customer service.</p>
        </section>

        <section id="skills" class="text-block">
            <h3>Technical Skills</h3>
            <ul>
                <li><strong>IT & Productivity:</strong> Microsoft Excel (Data Entry/Inventory), Word, and PowerPoint; foundational knowledge in Python and Web Development (HTML/CSS/JS).</li>
                <li><strong>Operations:</strong> Experienced in cash handling, fast-paced service, and following strict safety protocols.</li>
                <li><strong>Attributes:</strong> Highly focused, disciplined, and comfortable working in high-pressure environments.</li>
            </ul>
        </section>

        <section id="experience" class="text-block">
            <h3>Work Experience</h3>
            <div class="job-entry">
                <p class="job-title">Server / General Staff | Local Karinderya</p>
                <p class="date-text">December 04, 2025 – December 17, 2025</p>
                <ul>
                    <li>Managed customer orders and handled cash transactions with accuracy.</li>
                    <li>Maintained cleanliness and organized inventory in a high-traffic setting.</li>
                </ul>
            </div>

            <div class="job-entry" style="margin-top: 25px;">
                <p class="job-title">Construction Worker | Aguisan Fish Port</p>
                <p class="date-text">November 20, 2025 – November 30, 2025</p>
                <ul>
                    <li>Executed physically demanding tasks and followed complex verbal instructions.</li>
                    <li>Ensured workspace safety and tool accountability within a team environment.</li>
                </ul>
            </div>
        </section>

        <section id="education" class="text-block">
            <h3>Education & Affiliations</h3>
            <div class="edu-entry">
                <p><strong>Bachelor of Science in Information Technology (BSIT)</strong></p>
                <p>Carlos Hilado Memorial State University (CHMSU) | 1st Year</p>
                <ul>
                    <li>Relevant Coursework: Computer Programming 1, Program Logic Formulation.</li>
                </ul>
            </div>
            
            <div class="edu-entry" style="margin-top: 15px;">
                <p><strong>Member | Red Cross Youth (RCY)</strong></p>
                <p>CHMSU Campus Chapter | ID No. 2977727</p>
                <ul>
                    <li>Participates in campus-based humanitarian initiatives and community service.</li>
                </ul>
            </div>
        </section>
    </main>

    <script src="script.js"></script>
</body>
</html>`;

const cssSnippet = `:root {
  /* Colors inspired by your screenshot */
  --bg-color: #f0f2f5;
  --container-bg: #ffffff;
  --header-bg: #1a252f;
  --text-main: #334155;
  --text-heading: #1e293b;
  --accent-color: #008b8b;
  --nav-bg: #ffffff;
  --btn-bg: #f8fafc; /* Tinted so it's visible in light mode */
  --btn-border: #cbd5e1;
  --shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.dark-mode {
  --bg-color: #0f172a;
  --container-bg: #1e293b;
  --header-bg: #020617;
  --text-main: #cbd5e1;
  --text-heading: #2dd4bf;
  --accent-color: #2dd4bf;
  --nav-bg: #1e293b;
  --btn-bg: #334155;
  --btn-border: #475569;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  scroll-behavior: smooth;
  transition: background 0.3s, color 0.3s, border-color 0.3s;
}

body {
  background: var(--bg-color);
  color: var(--text-main);
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Header & Hover */
.header {
  background: var(--header-bg);
  width: 100%;
  padding: 1.5rem 0;
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 1100;
}

.header-title {
  color: white;
  font-size: clamp(1.2rem, 5vw, 1.8rem);
  cursor: pointer;
  display: inline-block;
}

.header-title:hover {
  color: cyan;
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.4);
}

/* Nav Horizontal Scroll */
.nav {
  background: var(--nav-bg);
  width: 100%;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  position: sticky;
  top: 70px; /* Below Header */
  z-index: 1000;
  overflow-x: auto;
}

.nav-inner {
  display: flex;
  padding: 0.8rem 1.5rem;
  gap: 1rem;
  width: max-content;
  margin: 0 auto;
}

.nav-btn, .nav-dropdown {
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  border: 1.5px solid var(--btn-border);
  background: var(--btn-bg);
  color: var(--text-main);
  font-weight: 600;
  cursor: pointer;
  font-size: 0.85rem;
}

.nav-btn:hover, .nav-dropdown:hover {
  border-color: var(--accent-color);
  color: var(--accent-color);
}

/* Container Logic */
.main-space {
  background: var(--container-bg);
  width: 90%;
  max-width: 850px;
  margin: 2rem 0 5rem;
  padding: clamp(1.5rem, 7vw, 4rem);
  border-radius: 8px;
  box-shadow: var(--shadow);
}

.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--accent-color);
  margin: 0 auto 1.5rem;
  display: block;
  background-color: var(--btn-bg);
  position: relative; /* Needed for centering the new text */
  
  /* 1. HIDE THE STUBBORN TEXT: Make the original alt text transparent 
     so it doesn't "clone" or stay glued to the top. */
  color: transparent; 
  
  /* 2. ALIGNMENT: Ensures the container stays a circle */
  overflow: hidden;
}

/* 3. CENTERED REPLACEMENT: This creates the centered text 
   only when the image is missing. */
.profile-pic::after {
  content: attr(alt);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  /* This is the magic centering logic */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  /* Bring the color back for the new text */
  color: var(--text-main);
  font-size: 0.9rem;
  font-weight: 600;
  padding: 10px; /* Keeps text from touching the circle edges */
  box-sizing: border-box;
}

/* TEXT FORMATTING (MATCHING SCREENSHOT) */
.text-block {
  margin-bottom: 2.5rem;
}

.text-block h3 {
  font-size: 1.1rem;
  color: var(--text-heading);
  text-transform: uppercase; /* All caps per image */
  font-weight: 800;
  border-bottom: 2px solid var(--accent-color); /* Full width line */
  padding-bottom: 5px;
  margin-bottom: 1.2rem;
  letter-spacing: 1px;
}

.text-block p, .text-block li {
  line-height: 1.6;
  font-size: 0.95rem;
}

.text-block ul {
  margin-left: 1.5rem;
  margin-top: 0.5rem;
}

.job-title {
  font-weight: bold;
  color: var(--text-heading);
}

.date-text {
  font-style: italic; /* Italic dates per image */
  font-size: 0.85rem;
  margin: 2px 0 8px;
  opacity: 0.8;
}

/* PRINT OPTIMIZATION: FORCING SINGLE PAGE */
@media print {
  @page { margin: 0.5cm; }
  .nav, .header { display: none !important; }
  body { background: white !important; }
  .main-space { 
    width: 100%; 
    margin: 0; 
    padding: 0.5rem; 
    box-shadow: none; 
  }
  .profile-pic { width: 100px; height: 100px; margin-bottom: 1rem; }
  .text-block { margin-bottom: 1rem; }
  h3 { font-size: 0.9rem !important; margin-bottom: 0.5rem !important; }
  p, li { font-size: 1rem !important; line-height: 1.3 !important; }
  .main-space { width: 100% !important; padding: 0 !important; }
}`;

const javascriptSnippet = `// Theme Toggle Logic
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeBtn.textContent = isDark ? "☀️ Light Mode" : "🌓 Toggle Dark Mode";
});

// Dropdown Navigation Logic
const jumpDropdown = document.getElementById('section-jump');
jumpDropdown.addEventListener('change', (e) => {
    const targetId = e.target.value;
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
        // Adjust this offset based on your sticky header height
        const offset = 140; 
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
});

// Copy Design Function
document.getElementById('copy-design').addEventListener('click', () => {
    
// Remove the dashes and populate the variants with your modified resume site
    const htmlPart = null;
      
    const cssPart = null;

    const javasciptPart = null;
    
    const fullCode = \`=== HTML ===
\${htmlPart}


=== CSS ===
\${cssPart}


=== javascript ===
\${javascriptPart}\`;
    
    navigator.clipboard.writeText(fullCode).then(() => {
        alert("Full HTML & Style template copied to clipboard!");
    }).catch(err => {
        alert("Error copying code: " + err);
    });
});`;

    
    const fullCode = `=== HTML ===
${htmlSnippet}


=== CSS ===
${cssSnippet}


=== javascript ===
${javascriptSnippet}`;

    navigator.clipboard.writeText(fullCode).then(() => {
        alert("Full Source Code Copied to clipboard!");
    }).catch(err => {
        alert("Error copying code: " + err);
    });
});
