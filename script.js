const counter = document.getElementById('counter');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');
const increment = document.getElementById('increment');
const label = document.getElementById('label');
const buttons = document.querySelectorAll('.btn');
const easterEgg = document.getElementById('easterEgg');
let value = 0;
let colorValue = 56;
let addonColorValue = 56;
let countOfRestart = 0;
let countOfMin = 0;
let countOfMax = 0;

function settingsBtn(value) {
    if (value >= 100 || value <= -100) {
        buttons.forEach((button) => {
            button.disabled = true;
        });
    }
    else if (value === 0) {
        buttons.forEach((button) => {
            button.disabled = false;
        })
    }
}

function feedback(value) {
    if (value === 0 && countOfRestart === 0) {
        easterEgg.innerHTML = "Hi! I'm a counter app"; 
        setTimeout(() => {
            easterEgg.innerHTML = "ㅤ"; 
        }, 3000);
    }
    else if (countOfRestart >= 5 && (countOfMin >= 2 && countOfMax >= 2)) {
        easterEgg.innerHTML = "My Congratulations you have completed this game completely. <br> Did you like this game?"
    }
    else if (countOfRestart > 0) {
        easterEgg.innerHTML = "ㅤ";
    }
}

function app() {
    counter.innerHTML = value;
    label.style.color = `hsl(${colorValue}, 100%, 85%)`;
    counter.style.color = `hsl(${colorValue}, 100%, 55%)`;
    feedback(value);
    increment.addEventListener('click', () => {
        value++;
        ++addonColorValue;
        if (addonColorValue % 2 === 0) {
            colorValue++;
            label.style.color = `hsl(${colorValue}, 100%, 85%)`;
            counter.style.color = `hsl(${colorValue}, 100%, 55%)`;
        }
        counter.innerHTML = value;
        settingsBtn(value);
        feedback(value);
    });
    decrement.addEventListener('click', () => {
        value--;
        --addonColorValue;
        if (addonColorValue % 2 === 0) {
            colorValue--;
            label.style.color = `hsl(${colorValue}, 100%, 85%)`;
            counter.style.color = `hsl(${colorValue}, 100%, 55%)`;
        }
        counter.innerHTML = value;
        settingsBtn(value);
        feedback(value);
    });
    reset.addEventListener('click', () => {
        if (value === 100 || value === -100) {
            countOfRestart++;
        }
        value = 0
        if (value === 0) {
            colorValue = 56;
            addonColorValue = 56;
            label.style.color = `hsl(${colorValue}, 100%, 85%)`;
            counter.style.color = `hsl(${colorValue}, 100%, 55%)`;
        }
        counter.innerHTML = value;
        settingsBtn(value);
        feedback(value);
    });
}

app();