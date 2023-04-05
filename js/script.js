let body = document.body;
const toggleBtn = document.getElementById('toggle-btn');
const updateBtn = document.getElementById('update-text-btn');
const displayText = document.getElementById('display-text');
const updateText = document.getElementById('update-text');
const alertBtn = document.getElementById('alert-btn');

let darkMode = 'disabled';

const enableDarkMode = () => {
    body.classList.add('dark');
    darkMode = 'enabled';
};

const disableDarkMode = () => {
    body.classList.remove('dark');
    darkMode = 'disabled';
};

window.addEventListener('load', () => {
    updateBtn.addEventListener('click', () => {
        displayText.innerText = updateText.value;
        updateText.value = '';
    });
});

toggleBtn.onclick = function() {
    if (darkMode === 'disabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
};

function showAlert() {
    window.alert(displayText.innerText);
}