
const painel1 = document.querySelector("#par-ou-impar")
const painel2 = document.querySelector("#escolha-numeros")
const resultado = document.querySelector("#resultado")
const botaojogar = document.querySelector("#botao-jogar")

function escolherParOuImpar(parOuImpar){
    this.parOuImpar = parOuImpar     
    console.log(parOuImpar) 
    painel1.style.display = 'none'
    painel2.style.display = 'block'
    return parOuImpar
}

function escolhernumero(numerousuario) {
    this.numerousuario = numerousuario
    console.log(numerousuario)
    desabilitarBotoes()
    return numerousuario
}

function desabilitarBotoes() {
    for(i = 0; i <= 5; i++) {
      document.getElementById('b' + i).setAttribute('disabled', true) 
      document.getElementById('b' + i).classList.add('desabilitado') 
    }
}

function selecionar(id) {
    const botao = document.getElementById(id)
    botao.classList.add('selecionado')
}

function escolherNumeroComputador() {
    numeroComputador = Math.floor (Math.random() * 6)
    console.log(numeroComputador)
}

function gerarTextoEscolhaUsuario(){
    if(parOuImpar == 0) {
    textoParOuImpar = "Par"
    } else if (parOuImpar == 1){
        textoParOuImpar = "Impar"
    }

    return textoParOuImpar
}

function verificarVencedor() {
    if ( (numerousuario + numeroComputador) % 2 == parOuImpar) {
        vencedor = "usuario" 
    } else {
        vencedor = "Computador"
}
    return vencedor 
}

function jogarParOuImpar(){
    painel2.style.display = 'none'
    resultado.style.display = 'block'
    botaojogar.style.display = 'none'

    resultado.innerHTML = "<h2 class='mensagem centralizado'>Resultado: </h2>"

    var parOuImparEscolhido = gerarTextoEscolhaUsuario()
    escolherNumeroComputador()
    var nomeVencedor = verificarVencedor()

    console.log ("Par Ou Impar ?" + parOuImpar)
    console.log ("Usuario escolheu ?" + numerousuario)
    console.log ("Computador escolheu?" + numeroComputador)
    console.log ("Vencedor?" + nomeVencedor)
}

