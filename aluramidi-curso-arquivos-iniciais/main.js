function tocaSom (idAudio){
    document.querySelector(idAudio).play();
}

const listaTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaTeclas.length; contador++){
    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    listaTeclas[contador].onclick = function () {
        tocaSom(idAudio);
    }
}
