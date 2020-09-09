const testimonials = [
  {
    name: "Robert said:",
    quote:
      '"I\'m not one to do readings but I actually enjoyed the experience. Learning about the past, present, and future of my career was not only entertaining but insightful."',
  },
  {
    name: "Tyler said:",
    quote:
      '"It helped me gain some closure and realize that I can\'t just sit here and let life work itself out. I have to take my own initiative."',
  },
  {
    name: "Jason & Joey said:",
    quote:
      '"Kevin’s reading was spot-on! We went into it just for fun, without any expectations, and found ourselves nodding in agreement with everything he said. He was thorough in his explanations and made sure we understood exactly what the cards meant. We highly recommend a reading by Kevin."',
  },
  {
    name: "Lainie & Joanna (creators of the FHOD!) said:",
    quote:
      "Kevin is our very FIRST certified reader in the universe. There's a reason for that!",
  },
  {
    name: "Chip said:",
    quote:
      "I am a person of logic, reason, and grounded in science. I had a reading and it was kind of scary with the level of detail related to my life currently. These were not overgeneralized answers. In any situation, I guess the best answer would be through scientific method and my next visit.",
  },
];

let counter = 0;
const testimonialQuote = document.getElementById("newQuote");
const testimonialName = document.getElementById("newName");
const changeTime = setInterval(newTestimonial, 10000);

function newTestimonial() {
  testimonialQuote.innerHTML = Object.values(testimonials[counter])[1];
  testimonialName.innerHTML = Object.values(testimonials[counter])[0];

  counter++;
  if (counter >= testimonials.length) {
    counter = 0;
  }
}
