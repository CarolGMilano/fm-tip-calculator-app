import { Calculadora } from './Calculadora.js';

document.addEventListener('input', function () {
    const gorjetaArray = document.querySelectorAll('[data-tips]');
    const gorjetaCustom = document.querySelector('[data-tipsCustom]');
    const porPessoaView = document.querySelector('[data-tipAmount]');
    const TotalView = document.querySelector('[data-tipTotal]');
    const labelArray = document.querySelectorAll('[data-labelCheck]');
    const reset = document.querySelector('[data-reset]');
    const contaInput = document.querySelector('[data-bill]');
    const pessoaInput = document.querySelector('[data-people]');
    const erro = document.querySelector('[data-erro]');

        reset.addEventListener('click', function() {
            porPessoaView.innerHTML = '0.00';
            TotalView.innerHTML = '0.00';
            contaInput.value = '';
            pessoaInput.value = '';
            gorjetaCustom.value = '';
            gorjetaArray.forEach(gorjeta => {
                gorjeta.checked = false;
            })
            labelArray.forEach(label => {
                label.style.backgroundColor = ''; 
                label.style.color = ''; 
            })
        })

        if(pessoaInput.value == 0) {
            erro.style.display = 'block';
            pessoaInput.style.border = '1px solid hsl(0, 59%, 59%)';
        } else {
            erro.style.display = 'none';
            pessoaInput.style.border = '';
        }

        if(gorjetaCustom.value != ''){
            labelArray.forEach(label => {
                label.style.backgroundColor = ''; 
                label.style.color = ''; 
            })

            let gorjetaValor = gorjetaCustom.value/100;
            const calculadora = new Calculadora(contaInput, gorjetaValor, pessoaInput);

                porPessoaView.innerHTML = calculadora.calcularGorjeta().toFixed(2);
                TotalView.innerHTML = calculadora.calcularTotal().toFixed(2);

        } else {
            gorjetaArray.forEach((gorjeta, pos) => {
                if(gorjeta.checked) {
                        labelArray.forEach(label => {
                            label.style.backgroundColor = ''; 
                            label.style.color = ''; 
                        })

                        labelArray[pos].style.backgroundColor = 'hsl(172, 67%, 45%)';
                        labelArray[pos].style.color = 'hsl(183, 100%, 15%)';
                    
                    const calculadora = new Calculadora(contaInput, gorjeta.value,pessoaInput);
                    
                        porPessoaView.innerHTML = calculadora.calcularGorjeta().toFixed(2);
                        TotalView.innerHTML = calculadora.calcularTotal().toFixed(2);
                }    
            });
        }  
        
        console.clear()
})
