// Theme Switcher
const themeSwitcher = document.getElementById('theme-switcher');
themeSwitcher.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Rototaiting skills
const skillElement = document.getElementById('skills');
const skillArray = ['C#', 'Python', 'SQL', 'JavaScript', 'HTML', 'CSS', 'Docker'];
let skillIndex = 0;
let currentSkill = 0;
let isDeleting = false;
let currentText = '';
let charIndex = 0;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenSkills = 1000;

function typeSkill() {
    const fullText = skillArray[currentSkill];

    if (!isDeleting && charIndex < fullText.length) {
        // Typing the skill letter by letter
        currentText += fullText.charAt(charIndex);
        charIndex++;
        skillElement.innerHTML = currentText;
        setTimeout(typeSkill, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
        // Deleting the skill letter by letter
        currentText = fullText.substring(0, charIndex - 1);
        charIndex--;
        skillElement.innerHTML = currentText;
        setTimeout(typeSkill, deletingSpeed);
    } else if (!isDeleting && charIndex === fullText.length) {
        // Pause after typing the full word, then start deleting
        setTimeout(() => {
            isDeleting = true;
            setTimeout(typeSkill, deletingSpeed);
        }, delayBetweenSkills);
    } else if (isDeleting && charIndex === 0) {
        // Move to the next skill and start typing
        isDeleting = false;
        currentSkill = (currentSkill + 1) % skillArray.length;
        setTimeout(typeSkill, typingSpeed);
    }
}

// Start the typewriter effect
typeSkill();