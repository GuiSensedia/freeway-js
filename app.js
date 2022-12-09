function setup() {
  createCanvas(600, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  
  mostraAtor();
  movimentaAtor();
  
  mostraCarros();
  movimentaCarros();
  retornaCarros();
  
  verficaColisao();
  
  marcaPontos();
  mostraPontos();
  
}
//VARIAVEL DAS IMAGENS
let imagemEstrada ;
let imagemAtor ;
let carro1 ;
let carro2 ;
let carro3 ;
//VARIAVEIS DOS SONS
let somColisao;
let somPontos;
let somTrilha;
//CARREGAMENTO
function preload(){
  
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemAtor = loadImage("imagens/ator-1.png");
  carro1 = loadImage("imagens/carro-1.png");
  carro2 = loadImage("imagens/carro-2.png");
  carro3 = loadImage("imagens/carro-3.png");
  imagemCarros=[carro1, carro2, carro3, carro1, carro2, carro3];
  
  somColisao = loadSound("sons/colidiu.mp3");
  somPontos = loadSound("sons/pontos.wav");
  somTrilha = loadSound("sons/trilha.mp3");
}

//VARIAVEIS DO ATOR
let xAtor = 100;
let yAtor = 367;
let colisao = false;
let meusPontos = 0;
let pontosOponentes = 0;

function mostraAtor(){
  image(imagemAtor,xAtor,yAtor,25,25);
}
function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 2;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(yAtor < 368){
      yAtor += 2;
    }
  }
}
function verficaColisao(){
    for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      somColisao.play();
      retornaAtor();
      perdePontos();
    }
  }
}
function retornaAtor(){
  yAtor = 370;
}
function mostraPontos(){
  textAlign(CENTER);
  fill(color(220,220,220))
  textSize(25);
  text(meusPontos, 20, 27);
}
function marcaPontos(){
  if (yAtor < 8){
    meusPontos++;
    somPontos.play(); 
    retornaAtor();
    
  }
}
function perdePontos(){
  if(meusPontos > 0){
  meusPontos--;
  }
}

//PARAMETROS DOS CARROS
let xCarros = [600,600,600,600,600,600];
let yCarros = [40,100,152,210,270,318];
let velocidadeCarros = [2, 4, 3, 5, 3.5, 2.5];
let comprimentoCarro = 55;
let alturaCarro = 35;

function mostraCarros(){
  for(let i = 0; i < imagemCarros.length; i += 1){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}
function movimentaCarros(){
  for(let i = 0; i < imagemCarros.length; i += 1)
  xCarros[i] -= velocidadeCarros[i];
}
function retornaCarros(){
  for(let i = 0; i < imagemCarros.length; i += 1)
    if (CarroPassouBorda(xCarros[i])){
      xCarros[i] = 605
  }
}
function CarroPassouBorda(xCarro){
  return xCarro < - 50;
  
}
