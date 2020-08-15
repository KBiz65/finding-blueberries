const testimonials = [
  {
    name: "Robert - Louisville, KY",
    quote:
      '"I\'m not one to do readings but I actually enjoyed the experience. Learning about the past, present, and future of my career was not only entertaining but insightful."',
  },
  {
    name: "Tyler - Louisville, KY",
    quote:
      '"It helped me gain some closure and realize that I can\'t just sit here and let life work itself out. I have to take my own initiative."',
  },
  {
    name: "Jason & Joey - Tampa, FL",
    quote:
      '"Kevin’s reading was spot-on! We went into it just for fun, without any expectations, and found ourselves nodding in agreement with everything he said. He was thorough in his explanations and made sure we understood exactly what the cards meant. We highly recommend a reading by Kevin."',
  },
];

let counter = 0;
const testimonialQuote = document.getElementById("newQuote");
const testimonialName = document.getElementById("newName");
const changeTime = setInterval(newTestimonial, 8000);

function newTestimonial() {
  testimonialQuote.innerHTML = Object.values(testimonials[counter])[1];
  testimonialName.innerHTML = Object.values(testimonials[counter])[0];
  // testimonialQuote.style.opacity = 1;
  // testimonialName.style.opacity = 1;
  counter++;
  if (counter >= testimonials.length) {
    counter = 0;
  }
}
