let listaDeNmerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleotario();
let tentativas = 1;

function exibirTextoNaTela( tag ,  texto){
 let campo = document.querySelector(tag);
 campo.innerHTML = texto;
 responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function exibirMensagemInicial(){
exibirTextoNaTela('h1' ,'Jogo de numero Secreto' );
exibirTextoNaTela('p' , 'Escolha um numero entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(numeroSecreto == chute);
    
    if( chute == numeroSecreto){
        exibirTextoNaTela('h1' , 'Acertou !!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p' , mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p' , 'O numero secreto é menor ');
        }else{
            exibirTextoNaTela('p' , 'O numero secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
    
}

function gerarNumeroAleotario(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNmerosSorteados.length;
    
    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNmerosSorteados = [];
    }
    if(listaDeNmerosSorteados.includes(numeroEscolhido)){
         return gerarNumeroAleotario();
    }else{
        listaDeNmerosSorteados.push(numeroEscolhido);
        console.log(listaDeNmerosSorteados);
        return numeroEscolhido;
    }
}


function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}



function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleotario();
    limparCampo();
    tentativas =1;
    console.log('reinica jogo');
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
