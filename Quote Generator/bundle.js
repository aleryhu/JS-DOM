let newQuote = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");




const quot = [
  {
    Quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand",
    Person: "– Martin Fowler",
  },
  {
    Quote: "First, solve the problem. Then, write the code.",
    Person: "– John Johnson",
  },
  {
    Quote: "Experience is the name everyone gives to their mistakes.",
    Person: "–– Oscar Wilde",
  },
  {
    Quote: "AIn order to be irreplaceable, one must always be different",
    Person: "– Coco Chanel",
  },
  {
    Quote: "Java is to JavaScript what car is to Carpet",
    Person: "– Chris Heilmann",
  },
  {
    Quote:
      "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code",
    Person: "–  Dan Salomon",
  },
  {
    Quote:
      "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.",
    Person: "– Antoine de Saint-Exupery",
  },
  {
    Quote: " Code is like humor. When you have to explain it, it’s bad.",
    Person: "– Cory House",
  },
  {
    Quote:
      " When to use iterative development? You should use iterative development only on projects that you want to succeed",
    Person: "– Martin Fowler",
  },
  {
    Quote: "Before software can be reusable it first has to be usable",
    Person: " – Ralph Johnson",
  },
];
const handleChange = (e) => {
    let random = Math.floor(Math.random() * quot.length)
    for (i = 0; i < quot.length; i++){
        quote.innerText = quot[random].Quote;
        person.innerText = quot[random].Person
    }
}
newQuote.addEventListener("click", handleChange)
