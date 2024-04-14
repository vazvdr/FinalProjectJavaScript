//variaveis do jogo
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500 //coloquei 1500 porque o JavaScript faz a conta em milissegundos

var nivel = window.location.search
nivel = nivel.replace('?', '')
//niveis do jogo
if(nivel === 'facil') {
	//1500
	criaMosquitoTempo = 1500
} else if(nivel === 'medio') {
	//1000
	criaMosquitoTempo = 1000
} else if (nivel === 'dificil') {
	//750
	criaMosquitoTempo = 750
}
//função para ajustar a largura e altura no tamanho do browser
function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()
//função para contagem regressiva
var cronometro = setInterval(function() {
	tempo -= 1
	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}	
},1000)
//função que lança os mosquitos aleatoriamente
function posicaoRandomica() {
	//remover o mosquito anterior (caso exista)
	if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		//console.log('elemento selecionado foi: v' + vidas)
		if(vidas > 3) {
			window.location.href = 'fim-de-jogo.html'
		} else {
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
			vidas++
		}
	}
	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//criar o elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function() {
		this.remove()
	}
	document.body.appendChild(mosquito)
}
function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)
	//função que cria os tamanhos aleatórios
	switch(classe) {
		case 0:
			return 'mosquito1'
		
		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'
	}
} //função para colocar o mosquito virado para esquerda ou direita
function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)	
	switch(classe) {
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
	}
}

