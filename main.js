form = document.getElementById('form-id')
valor_A = document.getElementById('valor-A').value
valor_B = document.getElementById('valor-B').value

form.addEventListener('submit', function (e) {
    e.preventDefault()
    valor_A = parseInt(document.getElementById('valor-A').value)
    valor_B = parseInt(document.getElementById('valor-B').value)
    const msg_maior_texto = "Valor B é maior que o valor A!"
    const msg_menor_texto = "Valor B não é maior que valor A!"
    if (valor_B > valor_A) {
        const msg_maior = document.querySelector('.maior-msg')
        msg_maior.innerHTML = msg_maior_texto
        msg_maior.style.display = 'block'
    }
    else {
        const msg_menor = document.querySelector('.menor-msg')
        msg_menor.innerHTML = msg_menor_texto
        msg_menor.style.display = 'block'
    }
})