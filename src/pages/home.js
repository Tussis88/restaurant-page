import Bakery from "../images/bakery.jpg";

function HomePage() {
  const contentDiv = document.querySelector("#content");

  const titleDiv = document.createElement("h1");
  titleDiv.classList.add("title");
  titleDiv.textContent = "Morges Bakery Cafe";
  contentDiv.appendChild(titleDiv);

  const bakeryImage = new Image();
  bakeryImage.src = Bakery;
  contentDiv.appendChild(bakeryImage);

  const descriptionDiv = document.createElement("p");
  descriptionDiv.classList.add("description");
  descriptionDiv.textContent =
    "Morges Bakery Cafe, nestled in the heart of Crossbell, is a cozy and inviting establishment renowned for its delicious baked goods and warm atmosphere. Run by the friendly and talented proprietors, Oscar and Bennet, the bakery offers a variety of freshly baked bread, pastries, and delightful treats that attract both locals and visitors alike.";
  contentDiv.appendChild(descriptionDiv);
}

export default HomePage;
