const quote = [
  "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill.",
  "Life is what happens when you're busy making other plans. - John Lennon.",
  "The best way to predict the future is to create it. - Peter Drucker.",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson.",
];
/* ---------------------
!!! Get HTML Eliment !!!
-----------------------*/
const buttonGivQuotes = document.getElementById("give-q");
const buttonRemoveQuotes = document.getElementById("remove-q");
let newQuote = document.getElementById("text-id");

buttonGivQuotes.addEventListener("click", giveQuotes);
/* --------------
!!! Give Quotes !!!
----------------*/
function giveQuotes() {
  let randomQuote = Math.floor(Math.random() * quote.length);
  newQuote.innerHTML += `<p>${quote[randomQuote]}</p>`;
}
/* --------------
! Remove Quotes !
----------------*/
buttonRemoveQuotes.addEventListener("click", removeQuotes);

function removeQuotes() {
  newQuote.textContent = "";
}
