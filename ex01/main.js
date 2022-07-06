const tel = document.querySelector('input[type="tel"]') //Dessa forma o input do type tal é selecionado

function addFoneNumber(number) {
    tel.value += number
}

const listaDeBotoes = document.querySelectorAll("input[type='button']")


for (let count = 0; count < listaDeBotoes.length; count++) {
    const botao = listaDeBotoes[count];
    
    botao.onclick = function () {
        addFoneNumber(botao.value)
    }

    botao.onkeydown = function (evento) {
        if(evento.code === "Enter" || evento.code === "Space") {
            botao.classList.add('ativa')
        }
    }

    botao.onkeyup = function () {
        botao.classList.remove('ativa')
    }
    
    
}
console.log(listaDeBotoes)