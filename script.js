const counter = document.getElementById('counter');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');
const increment = document.getElementById('increment');
let value = 0;

function changeColor() {
    if (value === 0) {
        counter.style.color = 'yellow';
    }
    else if (value > 10 && value <= 25) {
        counter.style.color = 'lightgreen';
    }
    else if (value > 25 && value <= 50) {
        counter.style.color = 'green';
    }
    else if (value > 50 && value < 100) {
        counter.style.color = 'lightblue';
    }
    else if (value < 0 && value >= -10) {
        counter.style.color = 'orange';
    }
    else if (value < -10 && value >= -25) {
        counter.style.color = 'orangered';
    }
    else if (value < -25 && value >= -50) {
        counter.style.color = 'red';
    }
}


function app() {
    counter.innerHTML = value;
    changeColor();
    increment.addEventListener('click', () => {
        value++;
        changeColor();
        counter.innerHTML = value;
    });
    decrement.addEventListener('click', () => {
        value--;
        changeColor();
        counter.innerHTML = value;
    });
    reset.addEventListener('click', () => {
        value = 0
        changeColor();
        counter.innerHTML = value;
    });
}

app();