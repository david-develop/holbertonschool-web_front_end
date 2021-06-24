function changeMode(size, weight, transform, background, color) {
  return function () {
    const body = document.body;
    body.style.fontSize = size;
    body.style.fontWeight = weight;
    body.style.textTransform = transform;
    body.style.backgroundColor = background;
    body.style.color = color;
  }
}

function main() {
  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  const body = document.body;
  // Paragraph
  const paragraph = document.createElement("p");
  const newContent = document.createTextNode("Welcome Holberton!");

  paragraph.appendChild(newContent);

  body.appendChild(paragraph);

  // Buttons
  const buttonSpooky = document.createElement("button");
  const buttonDark = document.createElement("button");
  const buttonScream = document.createElement("button");

  buttonSpooky.innerText = "Spooky";
  buttonDark.innerText = "Dark mode";
  buttonScream.innerText = "Scream mode";

  body.appendChild(buttonSpooky);
  body.appendChild(buttonDark);
  body.appendChild(buttonScream);

  // Triggers
  buttonSpooky.addEventListener('click', spooky);
  buttonDark.addEventListener('click', darkMode);
  buttonScream.addEventListener('click', screamMode);
}