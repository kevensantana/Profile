
// efeito maquina 
function typewrite(elemento) {
  const textArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textArray.forEach((letra,i) => {
    setTimeout(() => elemento.innerHTML += letra, 155 * i);
  })
}

const nome = document.querySelector('span.nome');
typewrite(nome)


// visibility

// ====================================================

//certificados

var balls = document.querySelector('.balls')
var qtd = document.querySelectorAll('.slides .slideImage')
var atual = 0;
var slideImage = document.getElementById('atual')
var proximo = document.getElementById('proximo')
var voltar = document.getElementById('voltar')

for(let i=2; i < qtd.length; i++){
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
  slideImage.style.marginLeft = -1170*atual+'px'
  document.getElementById(atual).classList.add('slideAtual')
}

slide(0)


// ====================================================

//Ling
const one = document.querySelector("div.container-one");
const two= document.querySelector("div.container-two");
const ling = document.querySelector("div.ling");
const lingTwo = document.querySelector("div.lingTwo");

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
];

imagem.map(imagem => {
  const lingClone = ling.cloneNode(true);
  lingClone.querySelector("img").src = imagem.img;
  one.appendChild(lingClone);
});


const imagemTwo = [
  {img: "assets/image/Ling/typescript.png"},
  {img: "assets/image/Ling/figma.png"},
  {img: "assets/image/Ling/sass.png"},
  {img: "assets/image/Ling/php.png"},
  {img: "assets/image/Ling/docker.png"},
  {img: "assets/image/Ling/ANGULAR.png"},
  {img: "assets/image/Ling/python.png"},
  {img: "assets/image/Ling/linux.png"},
]

imagemTwo.map(imagemTwo => {
  const lingClone2 = lingTwo.cloneNode(true);
  lingClone2.querySelector("img").src = imagemTwo.img;
  two.appendChild(lingClone2);
});

ling.remove();
lingTwo.remove();

// ====================================================




