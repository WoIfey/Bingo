const numbers = [];

function generateNumber() {
  const number = Math.floor(Math.random() * 75) + 1;

  if (numbers.includes(number)) {
    return generateNumber();
  } else {
    numbers.push(number);
    return number;
  }
}

function init() {
  for (let i = 0; i < 25; i++) {
    const newButton = document.createElement("button");

    if (i == 12) {
      newButton.innerText = "⭐";
      newButton.classList = "selected";
    } else {
      newButton.innerText = generateNumber();

      newButton.addEventListener("click", function () {
        if (newButton.classList == "selected") {
          newButton.classList.remove("selected");
        } else {
          newButton.classList.add("selected");
        }
      });
    }

    document.querySelector("section").appendChild(newButton);
  }
}

init();
