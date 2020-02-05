
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
    
    setTimeout(desaparecer, 3500)
}

function notificacaoErro(){
  console.log('Desculpe, você errou :(')
    divCaixinha = document.getElementById('caixinha1')
    divCaixinha.classList.add('is-danger')
    divMsg = document.getElementById('msg1')
    divMsg.innerHTML = 'Desculpe<br>Você errou, tente novamente :('
    
    setTimeout(desaparecer, 3500)
}

var desaparecer = function desaparecerNotificacao(){
  divCaixinha.classList.remove('is-success')
  divCaixinha.classList.remove('is-danger')
  divMsg.innerHTML = 'Digite um número de 1 a 100 e clique em "Confirmar!" para ver seu resultado!'
}

function escolherNumero(){
  function gerarNumeroAleatorio(){
    return Math.floor(Math.random() * 100)}
  numeroJogadorFormatado = Number.parseInt(document.getElementById('numeroJogador').value)
  if(numeroJogadorFormatado >= 0 && numeroJogadorFormatado <=100){
    console.log(numeroJogadorFormatado)
    document.getElementById('aviso').classList.add('invisible')
    if(numeroJogadorFormatado === 1){
      notificacaoAcerto()
    }else{
      notificacaoErro()
      
    }
    
  }else{
    document.getElementById('aviso').classList.remove('invisible')
  }
}


