//create function that removes the preloader

window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  const body = document.body;
  preload.classList.remove("preload");
  preload.classList.add("preload-finish");
  body.style.overflow = "";
  console.log("Loaded");
});
