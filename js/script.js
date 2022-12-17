console.log("JS OK");

// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// MILESTONE 1
// Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.
// MILESTONE 2
// Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.
// MILESTONE 3
// In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
// #MILESTONE 4
// Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!
// BONUS
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

// 1 prendo gli elementi dal dom
// 2 creo un event listener collegato al bottone
// 3 creo un loop che crei le caselle con dentro il rispettivo numero
// 4 creo un event listener che aggiunga la classe clicked alle varie caselle
// 5 ci aggiungo il console log con il numero della casella

// 3.5 creo una funzione che crei le caselle
const createCell = (content) => {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.append(content);
  return cell;
};

// 0.5 preparo le impostazioni iniziali
const rows = 10;
const cols = 10;
const totalCells = rows * cols;

// 1 prendo gli elementi dal dom
const container = document.getElementById("custom-container");
const button = document.getElementById("button");
const title = document.getElementById("title");
const pippo = document.getElementById("pippo");

// 2 creo un event listener collegato al bottone
button.addEventListener("click", function () {
  const prevContainer = document.getElementById("grid");
  if (prevContainer) {
    prevContainer.remove();
  }
  const grid = document.createElement("div");
  grid.setAttribute("id", "grid");
  // 3 creo un loop che crei le caselle
  for (let i = 1; i <= totalCells; i++) {
    const cell = createCell(i);
    // 4 creo un event listener che aggiunga la classe clicked alle varie caselle
    cell.addEventListener("click", () => {
      cell.classList.toggle("clicked");
      console.log(i);
    });
    grid.appendChild(cell);
    title && title.remove();
    container.appendChild(grid);
  }
});
