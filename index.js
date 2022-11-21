window.addEventListener("load", () => {
  const box = document.getElementById("score");
  const message = document.getElementById("message");
  const buttons = document.querySelectorAll("button");
  const user = {
    score: document.getElementById("user-score"),
    choice: document.getElementById("user-choice"),
  };
  const bot = {
    score: document.getElementById("bot-score"),
    choice: document.getElementById("bot-choice"),
  };
  const options = {
    0: "✋",
    1: "✌️",
    2: "✊",
  };

  function getRandomNumber(min, max) {
    return Math.floor((max - min + 1) * Math.random() + min);
  }

  function verifyWinner(user, bot) {
    if (user === bot) {
      return "draw";
    }
    if (user === "✋" && bot === "✊") {
      return "user";
    }
    if (user === "✌️" && bot === "✋") {
      return "user";
    }
    if (user === "✊" && bot === "✌️") {
      return "user";
    }
    return "bot";
  }

  function refreshScore(winner) {
    if (winner === "user") {
      user.score.textContent = String(Number(user.score.textContent) + 1);
      return;
    }
    if (winner === "bot") {
      bot.score.textContent = String(Number(bot.score.textContent) + 1);
      return;
    }
  }

  function printChoices(userChoice, botChoice) {
    user.choice.textContent = userChoice;
    bot.choice.textContent = botChoice;
  }

  function refreshMessage(winner) {
    if (winner === "user") {
      message.style.color = "greenyellow";
      message.textContent = "You win!";
      return;
    }
    if (winner === "bot") {
      message.style.color = "tomato";
      message.textContent = "You lose!";
      return;
    }

    message.style.color = "white";
    message.textContent = "Draw!";
  }

  function refreshBox(winner) {
    if (winner === "user") {
      box.style.boxShadow = "0 0 1.5rem greenyellow";
      return;
    }
    if (winner === "bot") {
      box.style.boxShadow = "0 0 1.5rem tomato";
      return;
    }

    box.style.boxShadow = "0 0 1.5rem white";
  }

  function game(event) {
    const botChoice = options[getRandomNumber(0, 2)];
    const userChoice = event.target.textContent;

    refreshBox(verifyWinner(userChoice, botChoice));
    refreshMessage(verifyWinner(userChoice, botChoice));
    refreshScore(verifyWinner(userChoice, botChoice));
    printChoices(userChoice, botChoice);
  }

  buttons.forEach((button) => {
    button.addEventListener("click", game);
  });
});
