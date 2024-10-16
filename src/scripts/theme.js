const botao = document.querySelector(".header__btn");
let darkMode = false;
const html = document.querySelector("html");

export const theme = () => {
  darkMode = !darkMode;
  html.classList.toggle("dark-mode");
  botao.classList.toggle("header__btn--dark-mode");
  localStorage.setItem("@openMusic:", JSON.stringify(darkMode));

  const storedTheme = localStorage.getItem("@openMusic:");
  if (storedTheme) {
    darkMode = JSON.parse(storedTheme);
  }
  if (darkMode) {
    html.classList.add("dark-mode");
    botao.classList.add("header__btn--dark-mode");
  }
};

botao.addEventListener("click", (event) => {
  event.preventDefault();
  theme();
});