const toggleBtn = document.getElementById('toggle-btn');
const updateBtn = document.getElementById('update-text-btn');
const displayText = document.getElementById('display-text');
const updateText = document.getElementById('update-text');
const alertBtn = document.getElementById('alert-btn');

let darkMode = false;

function enableDarkMode() {
    document.body.classList.add('dark');
    darkMode = true;
}

function disableDarkMode() {
    document.body.classList.remove('dark');
    darkMode = false;
}

function updateTextOnClick() {
    displayText.innerText = updateText.value;
    updateText.value = '';
}

function showAlert() {
    window.alert(displayText.innerText);
}

function toggleLightDark() {
    if (darkMode === false) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}