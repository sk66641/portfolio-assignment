// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Typing Effect
const text = "Welcome to My Portfolio";
let index = 0;
const typingText = document.querySelector('.typing-text');

(function type() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
})();

const themeToggleBtn = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;

// Apply saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
    htmlElement.classList.remove("dark");
    themeToggleBtn.src = "assets/darkMode.png";
} else {
    htmlElement.classList.add("dark");
    themeToggleBtn.src = "assets/lightMode.png";
}

themeToggleBtn.addEventListener("click", () => {
    if (htmlElement.classList.contains("dark")) {
        htmlElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        themeToggleBtn.src = "assets/darkMode.png";
    } else {
        htmlElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        themeToggleBtn.src = "assets/lightMode.png";
    }
});


const quotes = [
    "Code is like humor. When you have to explain it, it's bad.",
    "Simplicity is the soul of efficiency.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "First, solve the problem. Then, write the code.",
    "Programs must be written for people to read, and only incidentally for machines to execute.",
    "The best way to get a project done faster is to start sooner."
];

function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("random-quote").innerText = quotes[randomIndex];
}

document.getElementById("new-quote").addEventListener("click", generateRandomQuote);