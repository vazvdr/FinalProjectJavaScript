var altura = 0;
var largura = 0;

function ajustaTamanhoPalcoJogo(){
     altura = window.innerHeight;
     largura = window.innerWidth;
     console.log(altura, largura);
}

ajustaTamanhoPalcoJogo();

function posicaoRandomica(){
    if(document.getElementById('mosca')){
    document.getElementById('mosca').remove();
    }
    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura)  - 90;
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;
    console.log(posicaoX, posicaoY);
    //criar o elemento HTML
    var mosca = document.createElement('img');
    mosca.src='imagens/mosca.png';
    mosca.className=sizeRandom() + ' ' + sideRandom();
    mosca.style.left = posicaoX + 'px';
    mosca.style.top = posicaoY + 'px';
    mosca.style.position = 'absolute';
    mosca.id = 'mosca'
    mosca.onclick=function(){
        this.remove()
    }
    document.body.appendChild(mosca);
    console.log(sizeRandom());
    console.log(sideRandon());
}

function sizeRandom(){
    var classe = Math.floor(Math.random()*3);
    console.log(classe);
    switch(classe){
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3';
    }
}
function sideRandom(){
    var classe = Math.floor(Math.random()*2);
    switch(classe){
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB'
    }

}