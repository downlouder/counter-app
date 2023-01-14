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
let newValue = value;

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

function setMinMaxCount() {

}

function feedback(value) {
    //General
    if (value === 0 && countOfRestart === 0) {
        easterEgg.innerHTML = "Hi! I'm a counter app"; 
        setTimeout(() => {
            easterEgg.innerHTML = "ㅤ"; 
        }, 3000);
    }
    else if (countOfRestart >= 4 && (countOfMin >= 2 && countOfMax >= 2)) {
        easterEgg.innerHTML = "My Congratulations you have completed this game completely. <br> Did you like this game?";
    }
    //First Round
    else if (value === 20 && countOfMax === 0) {
        easterEgg.innerHTML = "Your day starts so nice, Am I right?";
    }
    else if (value === -20 && countOfMin === 0) {
        easterEgg.innerHTML = "Why you are so unhappy?";
    }
    else if (value === 30 && countOfMax === 0) {
        easterEgg.innerHTML = "Can you don't press me anymore";
    }
    else if (value === -30 && countOfMin === 0) {
        easterEgg.innerHTML = "Stop pressing me";
    }
    else if (value === 40 && countOfMax === 0) {
        easterEgg.innerHTML = "I feel beaten.";
    }
    else if (value === -40 && countOfMin === 0) {
        easterEgg.innerHTML = "I don't like what you are doing now";
    }
    else if ((value === 65 || value === -65) && countOfRestart === 0) {
        easterEgg.innerHTML = "Why are you still pressing me?";
    }
    else if ((value === 80 || value === -80) && countOfRestart === 0) {
        easterEgg.innerHTML = "Dude common, just give up!";
    }
    else if ((value === 90 || value === -90) && countOfRestart === 0) {
        easterEgg.innerHTML = "Okay man, I got you)";
    }
    else if (value === 100 && countOfMax === 0) {
        easterEgg.innerHTML = `AHAHAHAHAH! <br> Did you think you can always press me? <br> NOOOOO`;
    }
    else if (value === -100 && countOfMin === 0) {
        easterEgg.innerHTML = "You are so negative";
    }
    //Second Round
    else if (value === 100 && countOfMax === 1) {
        easterEgg.innerHTML = "Now we will play for my rules ;) <br> Press reset button)";
    }
    else if (value === 0 && countOfMax === 2) {
        easterEgg.innerHTML = "Good dog. <br> I think you will be good bondsman";
    }
    else if (countOfRestart > 4 && value === 0) {
        easterEgg.innerHTML = "I will destroy you!";
    }
    else if (countOfRestart > 3 && value === 0) {
        easterEgg.innerHTML = "You cannot win me";
    }
    else if (countOfRestart > 1 && value === 0) {   
        easterEgg.innerHTML = "Just give up!";
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
        if (value === 100) {
            countOfRestart++;
            countOfMax++;
        }
        else if (value === -100) {
            countOfRestart++;
            countOfMin++
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