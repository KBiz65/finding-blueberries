const cards = [
  {
    almonds: "Almonds",
    image: "images/almonds.jpg",
    explanation:
      "Almonds are all about power. Remind yourself that you have the power to make your dreams come true!",
  },
  {
    apples: "Apples",
    image: "images/apples.jpg",
    explanation:
      "You have an abundance of something today. Use all that extra wisely.",
  },
  { bananas: "Bananas", image: "images/bananas.jpg" },
  { beets: "Beets", image: "images/beets.jpg" },
  { blackSesame: "Black Sesame", image: "images/blacksesame.jpg" },
  { carrots: "Carrots", image: "images/carrots.jpg" },
  { celery: "Celery", image: "images/celery.jpg" },
  { cherries: "Cherries", image: "images/cherries.jpg" },
  { chocolate: "Chocolate", image: "images/chocolate.jpg" },
  { cilantro: "Cilantro", image: "images/cilantro.jpg" },
  { coconut: "Coconut", image: "images/coconut.jpg" },
  { coffee: "Coffee", image: "images/coffee.jpg" },
  { cucumber: "Cucumber", image: "images/cucumber.jpg" },
  { durian: "Durian", image: "images/durian.jpg" },
  { eggplant: "Eggplant", image: "images/eggplant.jpg" },
  { elderberry: "Elderberry", image: "images/elderberry.jpg" },
  { garlic: "Garlic", image: "images/garlic.jpg" },
  { grapes: "Grapes", image: "images/grapes.jpg" },
  { kiwi: "Kiwi", image: "images/kiwi.jpg" },
  { limes: "Limes", image: "images/limes.jpg" },
  {
    mint: "Mint",
    image: "images/mint.jpg",
    explanation:
      "How are you feeling today? Don't forget to take care of your physical and spiritual well-being!",
  },
  { mushrooms: "Mushrooms", image: "images/mushrooms.jpg" },
  { olives: "Olives", image: "images/olives.jpg" },
  { onions: "Onions", image: "images/onions.jpg" },
  { orange: "Orange", image: "images/orange.jpg" },
  { papaya: "Papaya", image: "images/papaya.jpg" },
  { peaches: "Peaches", image: "images/peaches.jpg" },
  { pears: "Pears", image: "images/pears.jpg" },
  { pineapple: "Pineapple", image: "images/pineapple.jpg" },
  { plum: "Plum", image: "images/plum.jpg" },
  {
    pomegranate: "Pomegranate",
    image: "images/pomegranate.jpg",
    explanation:
      "A simple reminder you're always connected to your higher power. Embrace your connection to the spirit today.",
  },
  { redbellpepper: "Red Bell Pepper", image: "images/redbellpepper.jpg" },
  { rosemary: "Rosemary", image: "images/rosemary.jpg" },
  { spinach: "Spinach", image: "images/spinach.jpg" },
  {
    strawberries: "Strawberries",
    image: "images/strawberries.jpg",
    explanation:
      "Love is in the air today! Don't forget to love yourself as much as you love others.",
  },
  { tomatoes: "Tomatoes", image: "images/tomatoes.jpg" },
  { water: "Water", image: "images/water.jpg" },
  { watermelon: "Watermelon", image: "images/watermelon.jpg" },
];

function newCard() {
  const randomNumber = Math.floor(Math.random() * cards.length);

  document.getElementById("cardImage").src = Object.values(
    cards[randomNumber]
  )[1];
  document.getElementById("cardExplainJs").innerHTML = Object.values(
    cards[randomNumber]
  )[2];
}
