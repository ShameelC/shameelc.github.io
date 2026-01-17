const roles = [
  "Cybersecurity Engineer",
  "VAPT Analyst",
  "ISO 27001 Auditor",
  "IT Infrastructure Security"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;
const textElement = document.getElementById("typing-text");

function typeEffect() {
  const current = roles[roleIndex];

  if (!deleting) {
    textElement.textContent = current.substring(0, charIndex++);
  } else {
    textElement.textContent = current.substring(0, charIndex--);
  }

  if (charIndex === current.length + 1) {
    deleting = true;
    setTimeout(typeEffect, 1200);
    return;
  }

  if (charIndex === 0 && deleting) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();
