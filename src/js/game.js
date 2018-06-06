(function() {

let container = document.querySelector(".wrapper");
const Colors = ["#f9ca24","#f9ca24", "#f0932b", "#f0932b", "#eb4d4b", "#eb4d4b", "#6ab04c", "#6ab04c","#7ed6df","#7ed6df","#e056fd","#e056fd","#4834d4","#4834d4","#130f40","#130f40","#6D214F","#6D214F",];

for (let i = 0; i < 18; i++) {
  let divider = document.createElement("div");
  container.appendChild(divider);
}

let cards = document.querySelectorAll('div');
cards = [...cards];

const start = new Date().getTime();

const init = function() {
  cards.forEach( card => {
    const cardPosition = Math.floor(Math.random()*Colors.length);
    card.style.background = Colors[cardPosition];
    Colors.splice(cardPosition, 1);
  })
}();

const clickCard = function() {
  console.log("click");
}


setTimeout(function() {
  cards.forEach( card => {
    card.style.background = "#2C3A47";
    card.addEventListener('click' , clickCard);
  })
}, 1500)


})();
