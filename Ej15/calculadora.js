// Variables globales
let operandoA = '';
let operandoB = '';
let operacion = '';

function init() {
    const display = document.getElementById('display');
    const botonesNumeros = Array.from(document.querySelectorAll('button[id]')).filter(b => b.id.match(/^\d$/));
    const botonesOperaciones = {
        sumar: document.getElementById('sumar'),
        restar: document.getElementById('restar'),
        multiplicar: document.getElementById('multiplicar'),
        dividir: document.getElementById('dividir')
    };
    const botonReset = document.getElementById('reset');
    const botonIgual = document.getElementById('igual');

    botonesNumeros.forEach(boton => {
        boton.onclick = function(e) {
            display.value += e.target.innerText;
        }
    });

    botonReset.onclick = function() {
        resetear();
    };

    botonIgual.onclick = function() {
        operandoB = display.value;
        resolver();
    };

    Object.keys(botonesOperaciones).forEach(key => {
        botonesOperaciones[key].onclick = function() {
            operandoA = display.value;
            operacion = key;
            limpiar();
        }
    });
}

function limpiar() {
    document.getElementById('display').value = '';
}

function resetear() {
    document.getElementById('display').value = '';
    operandoA = '';
    operandoB = '';
    operacion = '';
}

function resolver() {
    let resultado;
    const a = parseFloat(operandoA);
    const b = parseFloat(operandoB);
    
    if (isNaN(a) || isNaN(b)) {
        resultado = 'Error';
    } else {
        switch (operacion) {
            case 'sumar':
                resultado = a + b;
                break;
            case 'restar':
                resultado = a - b;
                break;
            case 'multiplicar':
                resultado = a * b;
                break;
            case 'dividir':
                if (b === 0) {
                    resultado = 'Error';
                } else {
                    resultado = a / b;
                }
                break;
            default:
                resultado = 'Error';
                break;
        }
    }
    resetear();
    document.getElementById('display').value = resultado;
}
