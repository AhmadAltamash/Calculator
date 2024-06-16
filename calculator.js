const display = document.getElementById('screen');
function clearAll() {
    display.value = '';
}

function clearEntry() {
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    if (display.value === '') return;
    const lastChar = display.value[display.value.length - 1];
    if (['+', '-', '*', '/'].includes(lastChar)) {
        display.value = display.value.slice(0, -1) + operator;
    } else {
        display.value += ' ' + operator + ' ';
    }
}

function calculate() {
    try {
        display.value = eval(display.value.replace('x', '*'));
    } catch {
        display.value = 'Error';
    }
}

function percent() {
    if (display.value === '') return;
    display.value = eval(display.value) / 100;
}
document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (key >= '0' && key <= '9') {
        appendNumber(key);
    } else if (key === '.') {
        appendNumber('.');
    } else if (key === '+') {
        appendOperator('+');
    } else if (key === '-') {
        appendOperator('-');
    } else if (key === '*') {
        appendOperator('*');
    } else if (key === '/') {
        appendOperator('/');
    } else if (key === '%') {
        percent();
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        clearEntry();
    } else if (key === 'Escape') {
        clearAll();
    }
});