/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#boton").addEventListener("click", function() {
    let valor = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    document.querySelector(".Reemplazar").innerHTML =
      valor[RandomCards(0, valor.length)];
    console.log(valor[RandomCards(0, valor.length - 1)]);
    Probando();
    console.log(card[RandomCards(0, card.length - 1)]);
  });
  let card = ["Pica", "Trebol", "Corazones", "Diamante"];

  function RandomCards(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  function Probando() {
    document.querySelector(".valor").className =
      " valor " + card[RandomCards(0, card.length)];
  }
};
