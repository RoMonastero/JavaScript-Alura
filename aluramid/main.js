function tocaSom(som) {
   const elemento = document.querySelector(`#som_${som}`)
    if (elemento && elemento.localName === 'audio') {
        elemento.play()
    }else {
        console.log('Elemento não encontrado ou seletor inválido')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla')

for (let count = 0; count < listaDeTeclas.length; count++) {
    const tecla = listaDeTeclas[count]

    const instrumento = tecla.classList[1]
    
    tecla.onclick = function (){
        tocaSom(instrumento)
    }

    tecla.onkeydown = function (evento) {
        if(evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
    
}
