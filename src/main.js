// header fixed
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("backdrop-blur-lg", "border-b-[1px]");
  } else {
    header.classList.remove("backdrop-blur-lg", "border-b-[1px]");
  }
});

// navigation
const menuBtn = document.getElementById("menu-btn");
const navigation = document.getElementById("navigation");

menuBtn.addEventListener("click", () => {
  if (menuBtn.classList.contains("bx-menu")) {
    menuBtn.classList.replace("bx-menu", "bx-x");
    navigation.classList.remove("hidden");
  } else if (menuBtn.classList.contains("bx-x")) {
    menuBtn.classList.replace("bx-x", "bx-menu");
    navigation.classList.add("hidden");
  }
});

// typed.js
const Typed = require("typed.js");

const typed = new Typed("#title", {
  strings: ["Fullstack Engineer"],
  typeSpeed: 1,
  loop: true,
});

// motivation
const motivation = [
  "Believe in yourself and your abilities, for when you hold that belief within you, you are already halfway on the journey to achieving your dreams.",
  "The key to doing exceptional work lies not only in mastering your craft, but also in finding true passion and fulfillment in what you choose to dedicate your time and energy to.",
  "Remember, success is not a destination reached by a single act, nor is failure a permanent state. It's the resilience to persevere through challenges and setbacks that truly defines our journey.",
  "Time is the most precious currency we possess, and the way we choose to spend it shapes the essence of our lives. Don't waste it living up to someone else's expectations; carve your own path and make each moment count.",
  "The future belongs to those who dare to dream, those who dare to believe in the boundless potential of their aspirations, and those who are willing to relentlessly pursue their visions with unwavering determination.",
  "Life is not merely about existing; it's about embracing each moment as an opportunity for growth, for self-discovery, and for making a positive impact on the world around us.",
  "In the grand scheme of things, our time on this earth is but a fleeting moment. Let us not squander it on trivial pursuits, but instead, let us strive to leave behind a legacy of kindness, compassion, and love.",
  "True happiness does not come from external possessions or achievements; it stems from within, from nurturing a sense of contentment, gratitude, and acceptance for the present moment, regardless of circumstances.",
  "The journey of self-discovery is not always easy, nor is it always pleasant. It requires courage to confront our fears, honesty to acknowledge our flaws, and resilience to keep moving forward in the face of adversity.",
  "Success is not measured solely by the heights we reach or the accolades we receive; it is also determined by the depth of our character, the strength of our integrity, and the sincerity of our intentions.",
  "Each day presents us with a new canvas upon which to paint the masterpiece of our lives. Let us wield our brushes with intention, filling each stroke with passion, purpose, and meaning.",
  "The pursuit of knowledge is a lifelong journey, a quest for understanding that transcends the boundaries of time and space. Let us approach each day with curiosity, humility, and an open mind.",
  "At the crossroads of opportunity and adversity lies our greatest potential for growth. It is in these moments of challenge and uncertainty that we discover our true strength, resilience, and capacity for transformation.",
  "Kindness is not merely a virtue to be practiced; it is a way of life, a guiding principle that shapes our interactions with others and infuses our world with warmth, compassion, and understanding.",
  "The path to success is not always linear; it is often filled with twists and turns, setbacks and detours. But it is in navigating these obstacles that we learn the most about ourselves and our true capabilities.",
  "Courage is not the absence of fear, but rather the willingness to act in spite of it. It is the strength to confront our doubts, overcome our insecurities, and pursue our dreams with unwavering determination.",
  "The beauty of life lies in its impermanence, in the ever-changing nature of existence. Let us embrace the ebb and flow of life's rhythms, finding solace in the knowledge that each ending brings forth new beginnings.",
  "Success is not a destination to be reached, but rather a journey to be embraced. It is not defined by the accolades we receive or the material possessions we amass, but by the impact we make on the lives of others.",
  "True strength is not found in the absence of weakness, but in the ability to acknowledge our vulnerabilities and embrace them as a source of growth and resilience.",
  "The power of gratitude lies not in the magnitude of our blessings, but in our willingness to recognize and appreciate the small joys that enrich our lives each day.",
];

const motivationElement = document.getElementById("motivation-element");
motivationElement.textContent =
  motivation[Math.floor(Math.random() * motivation.length)];
