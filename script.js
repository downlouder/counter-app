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
let isCompleted = false;
let countOfIgn = 0;
let clicks = 0;
let isCoolDown = false;

buttons.forEach((button) => {
    button.addEventListener('click', delay())
})

function delay() {
  return function() {
    if (isCoolDown) return;
    isCoolDown = true;
    setTimeout(() => isCoolDown = false, 100);
  };
} 

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
    //General
    if (isCompleted) {
        if (value === 0) {
            setTimeout(() => {
                easterEgg.innerHTML = "This game is completed, now I have to leave you";
            }, 7000);
        }
        easterEgg.innerHTML = "ㅤ"
    }
    else if (value === 0 && countOfRestart === 0) {
        easterEgg.innerHTML = "Hi! I'm a counter app"; 
        setTimeout(() => {
            easterEgg.innerHTML = "ㅤ"; 
        }, 3000);
    }
    //Last Round 
    if ((countOfMax >= 2 && countOfMin >= 2) && countOfRestart >= 4) {
        if (value === 0) {
            easterEgg.innerHTML = "I will destroy you!";
        }
        else if (value === -20 || value === 20) {
            easterEgg.innerHTML = "Stop dude, this game never is over";
        }
        else if (value === -40 || value === 40) {
            easterEgg.innerHTML = "Why are you still playing in the game?";
        }
        else if (value === -60 || value === 60) {
            easterEgg.innerHTML = "I think you should see a psychotherapist";
        }
        else if (value === -80 || value === 80) {
            easterEgg.innerHTML = "Just close this game";
        }
        else if (value === -90 || value === 90) {
            easterEgg.innerHTML = "You're not gonna make it.";
        }
        else if (value === -100 || value === 100) {
            isCompleted = true;
            easterEgg.innerHTML = "My Congratulations you have completed this game completely. <br> Did you like this game?";
        }
    }
    //Above code work correct

    //Third Round
    if (countOfMax === 2) {
        if (value > 0) {
            countOfIgn++;
            reset.click();
        }
        else if (countOfIgn > 0) {
            easterEgg.innerHTML = "No dude, you cannot increase";
        }
        else if (value === 0) {
            easterEgg.innerHTML = "Good dog.<br>I think you will be good bondsman<br>Now you can only decrease";
        }
        else if (value === - 5) {
            easterEgg.innerHTML = "Obedient boy";
        }
        else if (value === -99) {
            countOfIgn = 0;
        }
    }
    if (countOfMin === 2) {
        if (value < 0) {
            countOfIgn++;
            reset.click();
        }
        else if (countOfIgn > 0) {
            easterEgg.innerHTML = "No dude, you cannot decrease";
        }
    }
    else if (value === 0 && countOfMin === 2) {
        easterEgg.innerHTML = "Now you can only increase";
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
    else if ((value === 65 || value === -65) && (countOfMax === 0 || countOfMin === 0)) {
        easterEgg.innerHTML = "Why are you still pressing me?";
    }
    else if ((value === 80 || value === -80) && (countOfMax === 0 || countOfMin === 0)) {
        easterEgg.innerHTML = "Dude common, just give up!";
    }
    else if ((value === 90 || value === -90) && (countOfMax === 0 || countOfMin === 0)) {
        easterEgg.innerHTML = "Okay man, I got you)";
    }
    else if (value === 100 && countOfMax === 0) {
        easterEgg.innerHTML = `AHAHAHAHAH! <br> Did you think you can always press me? <br> NOOOOO`;
    }
    else if (value === -100 && countOfMin === 0) {
        easterEgg.innerHTML = "You are so negative";
    }
    //Second Round
    else if ((countOfMax === 1 || countOfMin === 1) && value === 0) {   
        easterEgg.innerHTML = "Just give up!";
    }
    else if ((countOfMax === 1 && countOfMin === 1) && (value === 25 || value === -25)) {
        easterEgg.innerHTML = "Stop pressing me";
    }
    else if ((countOfMax === 1 || countOfMin === 1) && (value === 50 || value === -50)) {

    }
    else if ((countOfMax === 1 || countOfMin === 1) && (value === 65 || value === -65)) {

    }
    else if ((countOfMax === 1 || countOfMin === 1) && (value === 80 || value === -80)) {

    }
    else if (countOfMax === 1 && value === 90) {

    }
    else if (countOfMin === 1 && value === -90) {
        easterEgg.innerHTML = "Try to be more positive";
    }
    else if (value === 100 && countOfMax === 1) {
        easterEgg.innerHTML = "Now we will play for my rules ;) <br> Press reset button)";
    }
    else if (value === -100 && countOfMin === 1) {
        easterEgg.innerHTML = "I know how I can make you more positive";
    }
    else if (countOfRestart >= 4 && value === 0) {
        easterEgg.innerHTML = "I will destroy you!";
    }
    else if (countOfRestart >= 3 && value === 0) {
        easterEgg.innerHTML = "You cannot win me";
    }
    else if (value === 0) {
        easterEgg.innerHTML = "ㅤ"
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