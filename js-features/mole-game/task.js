let deadCount = 0;
let lostCount = 0;
const maxDead = 10;
const maxLost = 5;

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

function holeClickHandler(event) {
  const hole = event.target;

  if (hole.classList.contains("hole_has-mole")) {
    deadCount++;
    document.getElementById("dead").textContent = deadCount;
  } else {
    lostCount++;
    document.getElementById("lost").textContent = lostCount;
  }

  if (deadCount >= maxDead) {
    alert("Поздравляем! Вы победили!");
    resetGame();
  } else if (lostCount >= maxLost) {
    alert("Игра окончена! Вы проиграли!");
    resetGame();
  }

  hole.blur();
}

function resetGame() {
  deadCount = 0;
  lostCount = 0;
  document.getElementById("dead").textContent = deadCount;
  document.getElementById("lost").textContent = lostCount;
}

for (let i = 1; i <= 9; i++) {
  const hole = getHole(i);
  hole.addEventListener("click", holeClickHandler);
}
