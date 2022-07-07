const botao = document.querySelector('#calcular')

const result = document.querySelector('.resultado')

console.log(result)

botao.addEventListener('click', () => {
    result.innerText = "Fui clicado"
})