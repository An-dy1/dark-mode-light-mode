let body = document.body;
const toggleBtn = document.getElementById('toggle-btn');
const updateBtn = document.getElementById('update-text-btn');
const displayText = document.getElementById('display-text');
const updateText = document.getElementById('update-text');

let darkMode = 'disabled';

const enableDarkMode = () => {
    body.classList.add('dark');
    darkMode = 'enabled';
};

const disableDarkMode = () => {
    body.classList.remove('dark');
    darkMode = 'disabled';
};

toggleBtn.onclick = (event) => {
    if (darkMode === 'disabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
};

updateBtn.onclick = (event) => {
    displayText.innerText = updateText.value;
    updateText.value = '';
};