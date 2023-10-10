// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo do número secreto";

// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Escolha um número entre 1 e 10";


let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

mensagemInicial();

function verificarChute () {
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto){
        exibirTextoNaTela("h1", "Parabéns!");
        let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas =  (`Você acertou o número secreto em ${tentativas} ${palavraTentativas}!`);
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");       
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
}

function mensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "escolha um número entre 1 e 10");
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let numerosNaLista = listaDeNumerosSorteados.length;
    console.log(listaDeNumerosSorteados);
    
    if(numerosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];

    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(numeroEscolhido);
        return numeroEscolhido;        
    }    
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}