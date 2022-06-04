// Make Cards
const sectionCards = document.querySelector("div.cards");
const card = document.querySelector("div.card");

const projetos = [{
    title: "DS Delivery",
    autor: "Keven Santana",
    status: "Bootcamp",
    thumb: "assets/image/projetos/design.jpeg",
    link: "https://github.com/kevensantana/DsDelivery",
    projeto_id: "01"
  },
  {
    title: "DoctorCare",
    autor: "Keven Santana",
    status: "NLW#8",
    thumb: "assets/image/projetos/doctorCare.jpg",
    link: "https://github.com/kevensantana/DoctorCare-",
    projeto_id: "02"

  }, {
    title: "Feedback Widget",
    autor: "Keven Santana",
    status: "NLW#8",
    thumb: "assets/image/projetos/feedback.jpg",
    link: "",
    projeto_id: "03"

  },
  {
    title: "Letmeask",
    autor: "Keven Santana",
    status: "NLW#6",
    thumb: "assets/image/projetos/letmeask.png",
    link: "",
    projeto_id: "04"
  },
  {
    title: "Podcastr",
    autor: "Keven Santana",
    status: "NLW#5",
    thumb: "assets/image/projetos/podcast.png",
    link: "https://github.com/kevensantana/NLW5-Podcastr",
    projeto_id: "05"
  },
  {
    title: "Move.it ",
    autor: "Keven Santana",
    status: "NLW#4",
    thumb: "assets/image/projetos/move.it.png",
    link: "https://github.com/kevensantana/NLW4-Move.it",
    projeto_id: "06"

  },

];

projetos.map(projeto => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", projeto.projeto_id);
  cardClone.querySelector("img").src = projeto.thumb;
  cardClone.querySelector("a").href = projeto.link;
  cardClone.querySelector(".title").innerHTML = projeto.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML = projeto.status;
  sectionCards.appendChild(cardClone);
});

card.remove();