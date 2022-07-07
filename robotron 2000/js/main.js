const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")

controle.forEach((elemento)=>{
    elemento.addEventListener('click', (evento) => {
        manipulandoDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

function manipulandoDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]')
    const valorPeca = Number(peca.value) 
    console.logo 
    if (operacao === '-') {
        peca.value = valorPeca - 1
    } else {
        peca.value = valorPeca + 1
    }
}

function atualizaEstatisticas(peca) {
    estatisticas.forEach((elemento) => {
        elemento.textContent = Number(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}
