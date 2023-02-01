export class Calculadora {
    constructor(conta, gorjeta, pessoas) {
        this.conta = conta;
        this.gorjeta = gorjeta;
        this.pessoas = pessoas;
    }

    calcularGorjeta() {
        if(this.conta.value && this.gorjeta && this.pessoas.value != '') {
            return (this.conta.value*this.gorjeta)/this.pessoas.value;
        }
    }

    calcularTotal() {
        if(this.conta.value && this.gorjeta && this.pessoas.value != '') {
            return (this.conta.value/this.pessoas.value)+this.calcularGorjeta();
        }
    }
}