import Burger from "../images/ColorfulTomatoBurger.png";
import Sandwitch from "../images/HappyHamSandwitch.png";
import Pizza from "../images/MeltedCheesePizza.png";
import Lunchbox from "../images/SincereLunchbox.png";

function Dish(name, ingridients, picture) {
  this.name = name;
  this.ingridients = ingridients;
  this.picture = picture;
}

function MenuData() {
  let menuArray = [];
  menuArray.push(new Dish("Colorful Tomato Burger", "Acerbid Tomato, Beast Flesh, Sharp Cheese", Burger));
  menuArray.push(new Dish("Melted Cheese Pizza", "Red Pepper, Acerbit Tomato, Sharp Cheese", Pizza));
  menuArray.push(new Dish("Happy Ham Sandwitch","Fresh Herb, King Potato, Marbled Steak", Sandwitch));
  menuArray.push(new Dish("Sincere Lunchbox","White Rice, Brilliant Carrot, Fresh Egg", Lunchbox));
  return menuArray;
};



export default MenuData;
