const counter = document.getElementById('counter');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');
const increment = document.getElementById('increment');
const label = document.getElementById('label');
let value = 0;
let colorValue = 56;

// function changeColor() {
//     if (value === 0) {
//         colorValue = 56;
//         label.style.color = `hsl(${colorValue}, 100%, 85%)`;
//         counter.style.color = `hsl(${colorValue}, 100%, 55%)`;
//     }
//     else if (value > 0) {
//         ++colorValue;
//         if (colorValue % 2 === 0) {
//             label.style.color = `hsl(${colorValue}, 100%, 85%)`;
//             counter.style.color = `hsl(${colorValue}, 100%, 55%)`;
//         }
//     }
//     else if (value < 0) {
//         --colorValue;
//         if (colorValue % 2 === 0) {
//             label.style.color = `hsl(${colorValue}, 100%, 85%)`;
//             counter.style.color = `hsl(${colorValue}, 100%, 55%)`;
//         }
//     }
// }

function app() {
    counter.innerHTML = value;
    label.style.color = `hsl(${colorValue}, 100%, 85%)`;
    counter.style.color = `hsl(${colorValue}, 100%, 55%)`;
    increment.addEventListener('click', () => {
        value++;
        ++colorValue;
        if (colorValue % 2 === 0) {
            label.style.color = `hsl(${colorValue}, 100%, 85%)`;
            counter.style.color = `hsl(${colorValue}, 100%, 55%)`;
        }
        counter.innerHTML = value;
    });
    decrement.addEventListener('click', () => {
        value--;
        --colorValue;
        if (colorValue % 2 === 0) {
            label.style.color = `hsl(${colorValue}, 100%, 85%)`;
            counter.style.color = `hsl(${colorValue}, 100%, 55%)`;
        }
        counter.innerHTML = value;
    });
    reset.addEventListener('click', () => {
        value = 0
        if (value === 0) {
            colorValue = 56;
            label.style.color = `hsl(${colorValue}, 100%, 85%)`;
            counter.style.color = `hsl(${colorValue}, 100%, 55%)`;
        }
        counter.innerHTML = value;
    });
}

app();