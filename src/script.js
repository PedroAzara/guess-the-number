function gerarNumeroAleatorio(){
    return Math.floor(Math.random() * 10)
}

function verificarSeEQuadradoPerfeito(n){
  raiz = Math.sqrt(n)
  return Number.isInteger(raiz)
    

}

function verificarSeECuboPerfeito(n){
  raizc = Math.cbrt(n)
  return Number.isInteger(raizc)
}

function verificarseEParOuImpar(n){
  if (n%2 == 0){
    return true
  }
  else{
    return false
  }
}

function notificacaoAcerto(){
  console.log('Parabéns, vc acertou')
    divModal = document.getElementById('modal1')
    divModal.classList.add('is-active')
    divModal.classList.add('is-clipped')
    
    setTimeout(desaparecer, 1500)
}

var desaparecer = function desaparecerNotificacao(){
  divModal.classList.add('is-active')
}

function escolherNumero(){
  function gerarNumeroAleatorio(){
    return Math.floor(Math.random() * 100)}
  numeroJogadorFormatado = Number.parseInt(document.getElementById('numeroJogador').value)
  if(numeroJogadorFormatado >= 0 && numeroJogadorFormatado <=100){
    console.log(numeroJogadorFormatado)
    if(numeroJogadorFormatado === 1){
      notificacaoAcerto()
    }else{
      console.log('Vc errou')
    }
    document.getElementById('aviso').classList.add('invisible')
  }else{
    document.getElementById('aviso').classList.remove('invisible')
  }
}


