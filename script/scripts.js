
//Ling
const sectionling = document.querySelector("div.container-conhecimentos");
const ling = document.querySelector("div.ling");

const imagem = [
  {img: "assets/image/Ling/JS.png"},
  {img: "assets/image/Ling/HTML.png"},
  {img: "assets/image/Ling/CSS.png"},
  {img: "assets/image/Ling/Java.png"},
  {img: "assets/image/Ling/GIT.png"},
  {img: "assets/image/Ling/GITHUB.png"},
  {img: "assets/image/Ling/GITLAB.png"},
  {img: "assets/image/Ling/REACT.png"},
  {img: "assets/image/Ling/ANGULAR.png"},
  {img: "assets/image/Ling/NODEJS.png"},
  {img: "assets/image/Ling/MYSQL.png"},
];

imagem.map(imagem => {
  const lingClone = ling.cloneNode(true);
  lingClone.querySelector("img").src = imagem.img;
  sectionling.appendChild(lingClone);
});

ling.remove();

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

