import Bennett from "../images/Bennett.jpg";
import Oscar from "../images/Oscar.jpg";

function About() {
  const contentDiv = document.querySelector("#content");

  const titleDiv = document.createElement("h1");
  titleDiv.textContent = "About us";
  contentDiv.appendChild(titleDiv);

  const container = document.createElement("div");
  container.id = "container";
  contentDiv.appendChild(container);

  const bennImg = new Image();
  bennImg.src = Bennett;
  bennImg.id = "bennett";
  container.appendChild(bennImg);

  const whereDiv = document.createElement("div");
  whereDiv.id = "where";
  container.appendChild(whereDiv);

  const whereTitle = document.createElement("h2");
  whereTitle.textContent = "Where";
  whereDiv.appendChild(whereTitle);

  const whereText = document.createElement("p");
  whereText.textContent =
    "You can find us at Crossbell City, in West Street close to the Crossbell's police Special Support Section Headquarters";
  whereDiv.appendChild(whereText);

  const oscarImg = new Image();
  oscarImg.src = Oscar;
  oscarImg.id = "oscar";
  container.appendChild(oscarImg);
}

export default About;
