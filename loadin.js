const messages = [
    "1.2.50",
    "ISSAC",
    "SCP-5113",
    "Click the Guy!",
    "Fun Fact: There's A Old Version Of MrRedCatWiki",
    "WiGgLe WiGgLe GoOsE gOoSe"
];

const loadingMessageElement = document.querySelector('.loading-message');
const randomIndex = Math.floor(Math.random() * messages.length);
loadingMessageElement.textContent = messages[randomIndex];

// Redirect to another page after a delay (e.g., 3 seconds)
setTimeout(() => {
    window.location.href = 'home.html'; // Replace with your target page
}, 3000); // 3000 milliseconds = 3 seconds


