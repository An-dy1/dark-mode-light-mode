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
    body.classList.remove('dark');
    darkMode = false;
}

window.addEventListener('load', () => {
    updateBtn.addEventListener('click', () => {
        displayText.innerText = updateText.value;
        updateText.value = '';
    });
});

toggleBtn.onclick = function() {
    if (darkMode === false) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
};

function showAlert() {
    window.alert(displayText.innerText);
}