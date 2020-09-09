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
  {
    bananas: "Bananas",
    image: "images/bananas.jpg",
    explanation:
      "Get out of your comfort zone today. Do something spontaneous. You might need to change things up a bit.",
  },
  {
    beets: "Beets",
    image: "images/beets.jpg",
    explanation:
      "Keep your feet planted on the ground. You need to be grounded before you can grow!",
  },
  {
    blackSesame: "Black Sesame",
    image: "images/blacksesame.jpg",
    explanation: "It's a great time to meditate and focus on your inner peace.",
  },
  {
    carrots: "Carrots",
    image: "images/carrots.jpg",
    explanation:
      "You may feel empowered to take on the world today. Even if you don't think you can, think again!",
  },
  {
    celery: "Celery",
    image: "images/celery.jpg",
    explanation:
      "What brings you vitality? Seek it out and let it replenish you. You'll be amazed on how refreshed you'll feel.",
  },
  {
    cherries: "Cherries",
    image: "images/cherries.jpg",
    explanation:
      "Community is more important than ever. Experience that connection to others by reaching out to someone who may need it.",
  },
  {
    chocolate: "Chocolate",
    image: "images/chocolate.jpg",
    explanation:
      "It's ok to indulge every once in a while! Why else would you be working so hard. Enjoy the fruits of your labor!",
  },
  {
    cilantro: "Cilantro",
    image: "images/cilantro.jpg",
    explanation:
      "Confusion can be a great thing. It reminds us to take a step back and regroup our thoughts. Take a moment to center yourself and do away with the confusion.",
  },
  {
    coconut: "Coconut",
    image: "images/coconut.jpg",
    explanation:
      "Don't forget to have fun! Been working too hard? Need a vacation? Take a break and have some fun!",
  },
  {
    coffee: "Coffee",
    image: "images/coffee.jpg",
    explanation:
      "This could saying you need a boost of energy. Whatever gets you energized, now's the time to do it!",
  },
  {
    cucumber: "Cucumber",
    image: "images/cucumber.jpg",
    explanation:
      "Today is a good day for balance. Don't let yourself go to any extremes. Staying balanced is good for making big decisions so don't let yourself get unbalanced.",
  },
  {
    durian: "Durian",
    image: "images/durian.jpg",
    explanation:
      "Some things you're not meant to know. Allow yourself to experience the mystery of the spirit and guide you on your path.",
  },
  {
    eggplant: "Eggplant",
    image: "images/eggplant.jpg",
    explanation:
      "This could mean you need to shine some light on something that's been in the dark too long.",
  },
  {
    elderberry: "Elderberry",
    image: "images/elderberry.jpg",
    explanation:
      "Let yourself be immune from the negativity you may see today. It can't affect you if you don't let it. You control what energies you allow in!",
  },
  {
    garlic: "Garlic",
    image: "images/garlic.jpg",
    explanation:
      "A reminder to be open to the world but allow yourself to protect yourself when needed. It's ok to say no, and ok to put a stop to the things that cause you harm.",
  },
  {
    grapes: "Grapes",
    image: "images/grapes.jpg",
    explanation:
      "Looking at difficult sitations with a good attitude will help you sail through them!",
  },
  {
    kiwi: "Kiwi",
    image: "images/kiwi.jpg",
    explanation:
      "You're not boxed in today! You have the freedom to be you! You are free to start a new project or read a good book. Today is your day!",
  },
  {
    limes: "Limes",
    image: "images/limes.jpg",
    explanation:
      "It's time to detoxify your soul. Get rid of the things that don't bring you joy and peace. A happy soul is a healthy soul.",
  },
  {
    mint: "Mint",
    image: "images/mint.jpg",
    explanation:
      "How are you feeling today? Don't forget to take care of your physical and spiritual well-being!",
  },
  {
    mushrooms: "Mushrooms",
    image: "images/mushrooms.jpg",
    explanation:
      "Magic is all about perception and the wonder of things around you. Embrace the wonder in everyday things.",
  },
  {
    olives: "Olives",
    image: "images/olives.jpg",
    explanation:
      "It's a great day for peace. Feel the peace and tranquility wash over you. Allow yourself to let the peace fill your heart and soul today.",
  },
  {
    onions: "Onions",
    image: "images/onions.jpg",
    explanation:
      "Accept that things may not always go the way you thought. There could be something even greater in the works for you so accept that the spirit know what its doing.",
  },
  {
    orange: "Orange",
    image: "images/orange.jpg",
    explanation:
      "It's going to be a sunny day for your soul! Let the light shine on you and fill you up with it's warmth.",
  },
  {
    papaya: "Papaya",
    image: "images/papaya.jpg",
    explanation:
      "Just go with the flow today. Be flexible and let things fall into place. Give yourself a day off from making decisions.",
  },
  {
    peaches: "Peaches",
    image: "images/peaches.jpg",
    explanation:
      "It's all about being positive today. Find the good in everything today. Having a positive perspective is important today.",
  },
  {
    pears: "Pears",
    image: "images/pears.jpg",
    explanation:
      "Allow yourself to feel the grace being given to you by the spirit. It's through grace that we can grow and thrive.",
  },
  {
    pineapple: "Pineapple",
    image: "images/pineapple.jpg",
    explanation:
      "It's a day for expansion. Looking to grow your business? Looking to add to a project? It's a great day for it!",
  },
  {
    plum: "Plum",
    image: "images/plum.jpg",
    explanation:
      "A gentle reminder to focus on having patience today. Patience to wait for something you really want or patience with things that may frustrate you. Good things come to those who wait!",
  },
  {
    pomegranate: "Pomegranate",
    image: "images/pomegranate.jpg",
    explanation:
      "A simple reminder you're always connected to your higher power. Embrace your connection to the spirit today.",
  },
  {
    redbellpepper: "Red Bell Pepper",
    image: "images/redbellpepper.jpg",
    explanation:
      "What gives you inspiration? Today's a good day to do whatever that is. Find your muse and let her work her magic to give you the inspiration you desire.",
  },
  {
    rosemary: "Rosemary",
    image: "images/rosemary.jpg",
    explanation:
      "What are you forgetting today? Remember to be thankful for the good things in life.",
  },
  {
    spinach: "Spinach",
    image: "images/spinach.jpg",
    explanation:
      "You've got the strength today! Maybe it's physical, maybe it's mental, but you have the strength today to take on whatever life throws at you!",
  },
  {
    strawberries: "Strawberries",
    image: "images/strawberries.jpg",
    explanation:
      "Love is in the air today! Don't forget to love yourself as much as you love others.",
  },
  {
    tomatoes: "Tomatoes",
    image: "images/tomatoes.jpg",
    explanation:
      "Today is the day to take action! What have you been thinking of doing? Starting a new project? Put those thoughts and dreams into action because today is a great day for it!",
  },
  {
    water: "Water",
    image: "images/water.jpg",
    explanation:
      "Let the water wash over you today and purify your soul. Don't forget to get your 8 glasses today!",
  },
  {
    watermelon: "Watermelon",
    image: "images/watermelon.jpg",
    explanation:
      "Do you need to release some energy? Negative feelings? Have some watermelon and let it all go. Being made mostly of water, it's the perfect food to release everything you don't need.",
  },
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
