
// Typewriter Effect for Tagline
document.addEventListener("DOMContentLoaded", () => {
  const tagline = document.querySelector(".tagline");
  const text = "Full Stack Developer";
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      tagline.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 75);
    }
  }

  tagline.textContent = "";
  typeWriter();
});

// Scroll Fade-In Animation
const faders = document.querySelectorAll(".section");

const appearOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("fade-in");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(section => {
  appearOnScroll.observe(section);
});