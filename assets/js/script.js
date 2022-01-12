const quoteSpan = document.getElementById("quote");
const authorSpan = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const twitterBtn = document.getElementById("twitter");
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
  if (quote.author){
    authorSpan.textContent = quote.author;
  } else {
    authorSpan.textContent = "Unknown";
  }
}



newQuoteBtn.addEventListener('click', getQuotes);
twitterBtn.addEventListener('click', function(){
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteSpan.textContent} ~${authorSpan.textContent}`;
  window.open(twitterUrl, '_blank');
})