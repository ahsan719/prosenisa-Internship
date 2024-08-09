// JavaScript to add functionality to the calculator
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (button.id === 'clear') {
                currentInput = '';
                operator = '';
                previousInput = '';
                display.value = '';
            } else if (value === '=') {
                if (operator && previousInput) {
                    currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                    display.value = currentInput;
                    operator = '';
                }
            } else if (button.classList.contains('operator')) {
                if (currentInput) {
                    operator = value;
                    previousInput = currentInput;
                    currentInput = '';
                }
            } else {
                currentInput += value;
                display.value = currentInput;
            }
        });
    });
});
