const counter = document.getElementById('counter');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');
const increment = document.getElementById('increment');
let value = 0;
let colorValue = 56;

function changeColor() {
    if (value === 0) {
        colorValue = 56;
        counter.style.color = `hsl(${colorValue}, 100%, 50%)`;
    }
    else if (value > 0) {
        colorValue++;
        counter.style.color = `hsl(${++colorValue}, 100%, 50%)`;
    }
    else if (value < 0) {
        counter.style.color = `hsl(${--colorValue}, 100%, 50%)`;
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