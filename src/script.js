
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
    divCaixinha = document.getElementById('caixinha1')
    divCaixinha.classList.remove('is-danger')
    divCaixinha.classList.add('is-success')
    divMsg = document.getElementById('msg1')
    divMsg.innerHTML = 'Parabéns!<br>Você <strong>acertou!</strong>'
    
    

}

function notificacaoErro(){
  console.log('Desculpe, você errou :(')
    divCaixinha = document.getElementById('caixinha1')
    divCaixinha.classList.add('is-danger')
    divMsg = document.getElementById('msg1')
    divMsg.innerHTML = 'Desculpe<br>Você errou, tente novamente :('
    
    
    
}

var desaparecer = function desaparecerNotificacao(){
  divCaixinha.classList.remove('is-success')
  divCaixinha.classList.remove('is-danger')
  divMsg.innerHTML = 'Digite um número de 1 a 100 e clique em "Confirmar!" para ver seu resultado!'
  numeroQERA = document.getElementById('numeroEra')
  numeroQERA.innerHTML = `Resultado`
}

function escolherNumero(){
  function gerarNumeroAleatorio(){
    return Math.floor(Math.random() * 100)}
  var numeroRandom = gerarNumeroAleatorio()
  numeroJogadorFormatado = Number.parseInt(document.getElementById('numeroJogador').value)
  if(numeroJogadorFormatado >= 0 && numeroJogadorFormatado <=100){
    console.log(numeroJogadorFormatado)
    document.getElementById('aviso').classList.add('invisible')
    numeroQERA = document.getElementById('numeroEra')
    numeroQERA.innerHTML = `O número era ${numeroRandom}`
    if(numeroJogadorFormatado === numeroRandom){
      notificacaoAcerto()   
    }else{
      notificacaoErro()
    }
    setTimeout(desaparecer, 8000)
    
  }else{
    document.getElementById('aviso').classList.remove('invisible')
  }
}


