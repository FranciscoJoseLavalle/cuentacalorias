const teclado = document.querySelectorAll(".teclas");
const panel = document.querySelector('.panel');

let tecla;

let valor = [];
let valores = [];
let tipo = '';

class Numeros {
    constructor(valor) {
        this.valor = valor;
    }
}

for (let i = 0; i < teclado.length; i++) {
    teclado[i].onclick = () => {
        tecla = teclado[i].textContent;
        validacion();
    }
}
function validacion() {
    if (tecla === 'Del') {
        valor.pop();
        if (valor.length === 0) {
            valor = ['0'];
        }
    } else if (tecla === '='){

        let numero = new Numeros(valor.join(''));
        valores.push(numero);
        valor = [];
        mostrarResultado();
    } else if (tecla === '+') {
        let numero = new Numeros(valor.join(''));
        tipo = '+';
        valores.push(numero);
        valor = [];
    } else if (tecla === '-') {
        let numero = new Numeros(valor.join(''));
        tipo = '-';
        valores.push(numero);
        valor = [];
    } else if (tecla === 'x') {
        let numero = new Numeros(valor.join(''));
        tipo = '*';
        valores.push(numero);
        valor = [];
    } else if (tecla === '/') {
        let numero = new Numeros(valor.join(''));
        tipo = '/';
        valores.push(numero);
        valor = [];
    } else if (tecla === '%') {
        let numero = new Numeros(valor.join(''));
        tipo = '%';
        valores.push(numero);
        valor = [];
    } else if (tecla === 'AC') {
        valor = ['0'];
    } else {
        if (valor[0] === '0') {
            valor = [];
        }
        valor.push(tecla)
    } 

    mostrarTecla();
}

function mostrarResultado() {
    if (tipo === '+') {
        let resultado = parseFloat(valores[0].valor) + parseFloat(valores[1].valor);
        valor.push(resultado);
    } else if (tipo === '-') {
        let resultado = parseFloat(valores[0].valor) - parseFloat(valores[1].valor);
        valor.push(resultado);
    } else if (tipo === '*') {
        let resultado = parseFloat(valores[0].valor) * parseFloat(valores[1].valor);
        valor.push(resultado);
    } else if (tipo === '/') {
        let resultado = parseFloat(valores[0].valor) / parseFloat(valores[1].valor);
        valor.push(resultado);
    } else if (tipo === '%') {
        let resultado = parseFloat(valores[0].valor) * parseFloat(valores[1].valor) / 100;
        valor.push(resultado);
    }
    valores = [];
}

function mostrarTecla() {

    panel.textContent = '';
   
    valor.forEach(element => {
        const p = document.createElement('p');
        p.textContent = element;
        panel.append(p);
    })
}