var data = [
  {
    number: "000",
    quote:
      "“It is easy to sit up and take notice, what's difficult is getting up and taking”",
    author: "unknown",
  },
  {
    number: "001",
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "Albert Einstein",
  },
  {
    number: "002",
    quote: "“You only live once, but if you do it right, once is enough.”",
    author: "Mae West",
  },
  {
    number: "003",
    quote:
      "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    author: "Mahatma Gandhi",
  },
  {
    number: "004",
    quote:
      "“It is better to be hated for what you are than to be loved for what you are not.”",
    author: "Andre Gide",
  },
  {
    number: "005",
    quote:
      "“I am so clever that sometimes I don't understand a single word of what I am saying.”",
    author: "Oscar Wilde",
  },
  {
    number: "006",
    quote:
      "“Good friends, good books, and a sleepy conscience: this is the ideal life.”",
    author: "Mark Twain",
  },
  {
    number: "007",
    quote:
      "“The fool doth think he is wise, but the wise man knows himself to be a fool.”",
    author: "William Shakespeare",
  },
  {
    number: "008",
    quote:
      "“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.”",
    author: "Bill Keane",
  },
  {
    number: "009",
    quote:
      "“A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one.”",
    author: "unknown",
  },
  {
    number: "010",
    quote:
      "“Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.”",
    author: "Lao Tzu",
  },
  {
    number: "011",
    quote:
      "“For every minute you are angry you lose sixty seconds of happiness.”",
    author: "Ralph Waldo Emerson",
  },
  {
    number: "012",
    quote:
      "“If you can't explain it to a six year old, you don't understand it yourself.”",
    author: "Albert Einstein",
  },
  {
    number: "013",
    quote:
      "“Love is that condition in which the happiness of another person is essential to your own.”",
    author: "Robert A. Heinlein",
  },
  {
    number: "014",
    quote:
      "“Life isn't about finding yourself. Life is about creating yourself.”",
    author: "George Bernard Shaw",
  },
  {
    number: "015",
    quote:
      "“Today you are You, that is truer than true. There is no one alive who is Youer than You.”",
    author: "Dr. Seuss",
  },
  {
    number: "016",
    quote:
      "“The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.”",
    author: "Bob Marley",
  },
  {
    number: "017",
    quote:
      "“I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.”",
    author: "Groucho Marx",
  },
  {
    number: "018",
    quote:
      "“Life is like riding a bicycle. To keep your balance, you must keep moving.”",
    author: "Albert Einstein",
  },
  {
    number: "019",
    quote:
      "“Anyone who has never made a mistake has never tried anything new.”",
    author: "Albert Einstein",
  },
];

const diceRollBtn = document.getElementById("diceBtn");
const diceContainer = document.querySelector(".dice__container");
const diceImg = document.querySelector(".dice-img");

const adviceNumber = document.getElementById("adviceNumber");
const quoteText = document.getElementById("quoteTxt");
const quoteAuthor = document.getElementById("quoteAuthor");

diceRollBtn.addEventListener("click", () => {
  diceImg.classList.toggle("roll");
  rollAQuote();
});

window.addEventListener("load", () => {
  rollAQuote();
});

function rollAQuote() {
  var rolledIndex = Math.floor(Math.random(data) * data.length);

  adviceNumber.innerHTML = `#${data[rolledIndex].number}`;
  quoteText.textContent = data[rolledIndex].quote;
  quoteAuthor.textContent = `- ${data[rolledIndex].author}`;
}
