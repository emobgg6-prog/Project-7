const navToggle = document.querySelector(".nav-toggle");
const navbar = document.querySelector(".navbar");

navToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});


// === Global Scroll Reveal Options ===
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  easing: "ease-in-out",
  reset: true,
};

// === HOME SECTION ===
ScrollReveal().reveal(".header-image img", {
  duration: 1000,
  origin: "right",
});
ScrollReveal().reveal(".home-left h1", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".home-left p", {
  ...scrollRevealOption,
  delay: 600,
});
ScrollReveal().reveal(".home-left .btn", {
  ...scrollRevealOption,
  delay: 900,
});
ScrollReveal().reveal(".socials-icons", {
  ...scrollRevealOption,
  delay: 1200,
});

// === MENU SECTION ===
ScrollReveal().reveal(".menu .box1", {
  ...scrollRevealOption,
  delay: 200,
});
ScrollReveal().reveal(".menu .box2", {
  ...scrollRevealOption,
  delay: 400,
});
ScrollReveal().reveal(".menu .box3", {
  ...scrollRevealOption,
  delay: 600,
});
ScrollReveal().reveal(".text-container", {
  ...scrollRevealOption,
  delay: 400,
});




// === CATEGORY SECTION ===
ScrollReveal({
  distance: "60px",
  duration: 1500,
  delay: 200,
  reset: true,
});

ScrollReveal().reveal(".heading, .cate-info", { origin: "top" });
ScrollReveal().reveal(".reveal-left", { origin: "left" });
ScrollReveal().reveal(".reveal-right", { origin: "right" });
