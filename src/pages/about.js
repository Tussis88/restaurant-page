import CrossMap from "../images/map.png";

function About() {
  const contentDiv = document.querySelector("#content");

  const titleDiv = document.createElement("h1");
  titleDiv.textContent = "About us";
  contentDiv.appendChild(titleDiv);

  const mapImage = new Image();
  mapImage.src = CrossMap;
  mapImage.id = "map";
  contentDiv.appendChild(mapImage);

  const whereText = document.createElement("p");
  whereText.textContent =
    "You can find us at Crossbell City, in West Street close to the Crossbell's police Special Support Section Headquarters";
  contentDiv.appendChild(whereText);
}

export default About;
