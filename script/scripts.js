
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

// Make Cards
const sectionCards = document.querySelector("div.cards");
const card = document.querySelector("div.card");

const projetos = [
  {
    title: "DS Delivery",
    autor: "Keven Santana",
    status: "Bootcamp",
    thumb: "assets/image/projetos/design.jpeg",
    link: "google.com",
    projeto_id: "01"
  },
  {
    title: "Letmeask",
    autor: "Keven Santana",
    status: "NLW#6",
    thumb: "assets/image/projetos/letmeask.png",
    link: "",
    projeto_id: "02"
  },
  {
    title: "Podcastr",
    autor: "Keven Santana",
    status: "NLW#5",
    thumb: "assets/image/projetos/podcast.png",
    link: "",
    projeto_id: "03"
  },
  {
    title: "Move.it ",
    autor: "Keven Santana",
    status: "NLW#4",
    thumb: "assets/image/projetos/move.it.png",
    link: "",
    projeto_id: "04"

  },
];

projetos.map(projeto => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", projeto.projeto_id);
  cardClone.querySelector("img").src = projeto.thumb;
  cardClone.querySelector(".title").innerHTML = projeto.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML = projeto.status;
  sectionCards.appendChild(cardClone);
});

card.remove();

