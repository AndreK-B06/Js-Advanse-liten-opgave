const quote = [
  "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The best way to predict the future is to create it. - Peter Drucker",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
];
// Get html eliment
console.log(quote);
const buttonGivQuotes = document.querySelector("#give-q");
const buttonRemoveQuotes = document.querySelector("#remove-q");

buttonGivQuotes.addEventListener("Click", giveQuotes);
/* --------------
!!! Give Quotes !!!
----------------*/
function giveQuotes( {
  return quote[Math.floor(Math.random() * quotes - length)]
});
/* --------------
! Remove Quotes !
----------------*/
buttonRemoveQuotes.addEventListener("click", removeQuote)

function removeQuote( {
    quoteElement.textContent = ''
});