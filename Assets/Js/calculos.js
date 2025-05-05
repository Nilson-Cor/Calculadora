document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById('display');

    // Funciones
    function clearDisplay() {
        display.textContent = '0';
    }

    function deleteLast() {
        display.textContent = display.textContent.slice(0, -1) || '0';
    }

    function append(char) {
        if (display.textContent === '0' && char !== '.') {
            display.textContent = char;
        } else {
            display.textContent += char;
        }
    }

    function calculate() {
        try {
            display.textContent = eval(display.textContent);
        } catch {
            display.textContent = 'Error';
        }
    }

    // Eventos
    document.getElementById('clear').addEventListener('click', clearDisplay);
    document.getElementById('delete').addEventListener('click', deleteLast);
    document.getElementById('equal').addEventListener('click', calculate);

    // Botones de números y operadores
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            append(value);
        });
    });
});
