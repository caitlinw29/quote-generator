const quoteSpan = document.getElementById("quote");
const authorSpan = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
let apiQuotes = [];

//Grab Quotes from API
async function getQuotes(){
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (err){
    alert(err);
  }
}

function newQuote() {
  const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
  quoteSpan.textContent = quote.text;
  authorSpan.textContent = quote.author;
}

newQuoteBtn.addEventListener('click', getQuotes);