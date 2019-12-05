//create function that removes the preloader

window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  const body = document.body;
  preload.classList.add("preload-finish");
  body.style.overflow = "";
});

console.log("Henlo");
