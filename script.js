script.js


function exibirTextoNaTela(Chuva, Muita chuva) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

document.getElementById('botao').addEventListener('click', function() {
    exibirTextoNaTela('h1', 'Que chuva!');
    exibirTextoNaTela('p', 'Muito boa!');
});

