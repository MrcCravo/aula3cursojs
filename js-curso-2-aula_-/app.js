// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo do número secreto";

// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Escolha um número entre 1 e 10";

let numeroSecreto = 5; //gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", "escolha um número entre 1 e 10");

function verificarChute () {
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto){
        exibirTextoNaTela("h1", "Parabéns!");
        let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas =  (`Você acertou o número secreto em ${tentativas} ${palavraTentativas}!`);
        exibirTextoNaTela("p", mensagemTentativas);
    } else {
        if(chute < numeroSecreto) {
        exibirTextoNaTela("h1", "Tente novamente");
        exibirTextoNaTela("p", "O número secreto é maior");
        } else {
            exibirTextoNaTela("h1", "Tente novamente");
            exibirTextoNaTela("p", "O número secreto é menor");
        }
    }
    tentativas++;
    limparCampo();
    function limparCampo(){
        chute = document.querySelector("input");
        chute.value = "";
    }
}

function gerarNumeroAleatorio () {
    return parseInt(Math.random() * 10 + 1);
}
