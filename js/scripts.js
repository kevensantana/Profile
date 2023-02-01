
// efeito maquina 
function typewrite(elemento) {
  const textArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textArray.forEach((letra,i) => {
    setTimeout(() => elemento.innerHTML += letra, 195 * i);
  })
}

const nome = document.querySelector('span.nome');
typewrite(nome)


// visibility

// ====================================================

//certificados


const slides = document.querySelector("div.slides");
const slideOne = document.querySelector("div.slideOne");

const certificados = [
  {img: "assets/image/certificados/cert01.png"},
  {img: "assets/image/certificados/cert02.png"},
  {img: "assets/image/certificados/cert03.png"},
  {img: "assets/image/certificados/cert04.png"},
  {img: "assets/image/certificados/cert05.png"},
  {img: "assets/image/certificados/cert06.png"},
  {img: "assets/image/certificados/cert07.png"},
  {img: "assets/image/certificados/cert08.png"},
];

certificados.map(certificados => {
  const slideClone = slideOne.cloneNode(true);
  slideClone.querySelector("img").src = certificados.img;
  slides.appendChild(slideClone);
});

slideOne.remove();



var balls = document.querySelector('.balls')
// var qtd = document.querySelectorAll('.slides .slideImage')
var qtd = 2;
var atual = 0;
var slideImage = document.getElementById('atual')
var proximo = document.getElementById('proximo')
var voltar = document.getElementById('voltar')

for(let i=1; i < qtd.length; i++){
  var div = document.createElement('div')
  div.id = i
  balls.appendChild(div)
}

document.getElementById('0').classList.add('slideAtual')

var pos = document.querySelectorAll('.balls div')

for(let i=0; i< pos.length; i++){
  pos[i].addEventListener('click',() => {
    atual = pos[i].id
    slide()
  })
}

voltar.addEventListener('click', () => {
  atual--
  slide()
})

proximo.addEventListener('click', () => {
  atual++ 
  slide()
})


function slide(){
  if(atual >= qtd.length){
    atual = 0
  }
  else if(atual < 0){
    atual = qtd.length-1
  }
  document.querySelector('.slideAtual').classList.remove('slideAtual')
  slideImage.style.marginLeft = -1170 * atual + 'px'
  document.getElementById(atual).classList.add('slideAtual')
}

slide(0)


// ====================================================

//Ling
const one = document.querySelector("div.container-one");
const ling = document.querySelector("div.ling");

const imagem = [
  {img: "assets/image/Ling/JS.png"},
  {img: "assets/image/Ling/html-5.png"},
  {img: "assets/image/Ling/css.png"},
  {img: "assets/image/Ling/java.png"},
  {img: "assets/image/Ling/git.png"},
  {img: "assets/image/Ling/github.png"},
  {img: "assets/image/Ling/GITLAB.png"},
  {img: "assets/image/Ling/physics.png"},
  {img: "assets/image/Ling/node-js.png"},
  {img: "assets/image/Ling/mysql.png"},
  {img: "assets/image/Ling/typescript.png"},
  {img: "assets/image/Ling/figma.png"},
  {img: "assets/image/Ling/sass.png"},
  {img: "assets/image/Ling/php.png"},
  {img: "assets/image/Ling/docker.png"},
  {img: "assets/image/Ling/ANGULAR.png"},
  {img: "assets/image/Ling/python.png"},
  {img: "assets/image/Ling/linux.png"},
];

imagem.map(imagem => {
  const lingClone = ling.cloneNode(true);
  lingClone.querySelector("img").src = imagem.img;
  one.appendChild(lingClone);
});

ling.remove();

// ====================================================




function leiaMais(){
  var verMais = document.getElementById("verMais")
  var maisTexto = document.getElementById("mais")
  var leiaMais = document.getElementById("leiaMais")

  

  if(verMais.style.display === "none"){
      verMais.style.display = "inline";
      maisTexto.style.display = "none";
      leiaMais.innerHTML = "...";
  } else{
      verMais.style.display = "none";
      maisTexto.style.display = "inline";
      leiaMais.innerHTML = "..."
  }
}


