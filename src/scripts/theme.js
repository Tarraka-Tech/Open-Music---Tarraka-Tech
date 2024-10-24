const botao = document.querySelector(".header__btn");
const html = document.querySelector("html");

const storedTheme = localStorage.getItem("@openMusic:");
let darkMode = storedTheme ? JSON.parse(storedTheme) : false;

export const theme = () => {
  darkMode = !darkMode; 
  html.classList.toggle("dark-mode", darkMode);
  botao.classList.toggle("header__btn--dark-mode", darkMode);
  localStorage.setItem("@openMusic:", JSON.stringify(darkMode));
};

if (darkMode) {
  html.classList.add("dark-mode");
  botao.classList.add("header__btn--dark-mode");
} else {
  html.classList.remove("dark-mode");
  botao.classList.remove("header__btn--dark-mode");
}

botao.addEventListener("click", (event) => {
  event.preventDefault();
  theme();
});