import "./style.css";
import HomePage from "./pages/home";
import Menu from "./pages/menu";
import About from "./pages/about";

const Button = () => {
  const home = document.querySelector("#home");
  const menu = document.querySelector("#menu");
  const about = document.querySelector("#about");
  home.addEventListener("click", changePage);
  menu.addEventListener("click", changePage);
  about.addEventListener("click", changePage);
};

const changePage = (e) => {
  const contentDiv = document.querySelector("#content");
  contentDiv.textContent = "";
  if (e.target.id === "home") HomePage();
  if (e.target.id === "menu") Menu();
  if (e.target.id === "about") About();
};

HomePage();
Button();
