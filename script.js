let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");
let api = "https://api.quotable.io/random";
let getQuote = () => {
  fetch(api)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      person.innerText = item.author;
    });
};

btn.addEventListener("click", getQuote);
getQuote();
