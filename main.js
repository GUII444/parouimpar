console.log("esta funfando?")

const painel1 = document.querySelector("#par-ou-impar")
const painel2 = document.querySelector("#escolha-numeros")
const painel3 = document.querySelector("#resultado")

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
    return numerousuario
}