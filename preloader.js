window.onload = () => {
  const transition_el = document.querySelector(".transition");

  setTimeout(() => {
    transition_el.classList.remove("is-active");
  }, 100);
};

const myPreloader = document.querySelector(".spinner");

const fadeOutEffect = setInterval(() => {
  window.open("./app.htm", "_self");
}, 5000);

window.addEventListener("load", fadeOutEffect);
