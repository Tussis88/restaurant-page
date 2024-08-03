import MenuData from "../data/dishes";

function Menu() {
  const contentDiv = document.querySelector("#content");

  const titleDiv = document.createElement("h1");
  titleDiv.classList.add("title");
  titleDiv.textContent = "Menu";
  contentDiv.appendChild(titleDiv);

  const data = MenuData();
  data.forEach((dish) => {
    const dishCard = document.createElement("div");
    dishCard.classList.add("card");
    contentDiv.appendChild(dishCard);

    const cardImage = new Image();
    cardImage.src = dish.picture;
    dishCard.appendChild(cardImage);

    const cardTextContainer = document.createElement("div");
    dishCard.appendChild(cardTextContainer);

    const textTitle = document.createElement("h3");
    textTitle.textContent = dish.name;
    cardTextContainer.appendChild(textTitle);

    const textIngridients = document.createElement("p");
    textIngridients.textContent = dish.ingridients;
    cardTextContainer.appendChild(textIngridients);

  });
}

export default Menu;
