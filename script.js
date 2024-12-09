const block = document.getElementById("block");
const rocks = document.querySelectorAll(".rock");
const startPlayer = document.getElementById("startplayer");
const modal2 = document.getElementById("modal2");
const modal3 = document.getElementById("modal3");
var click = new Audio("audio/click.mp3");
var modal = document.getElementById("myModal");
var img = document.getElementById("myImage");
var modalImg = document.getElementById("modalImage");
var span = document.getElementsByClassName("close")[0];
var battle = document.getElementById("battle");
let positionX = 1730; // Starting X position
let positionY = 1025; // Starting Y position
const moveStep = 10; // Distance to move each time
let movingDirection = null; // Current direction of movement
let isMoving = false; // Whether the block is currently moving

function isColliding(newX, newY) {
  const blockRect = {
    left: newX,
    top: newY,
    right: newX + 50,
    bottom: newY + 50,
  };

  return Array.from(rocks).some((rock) => {
    const rockRect = rock.getBoundingClientRect();
    return !(
      blockRect.right < rockRect.left ||
      blockRect.left > rockRect.right ||
      blockRect.bottom < rockRect.top ||
      blockRect.top > rockRect.bottom
    );
  });
}

function moveContinuously() {
  if (movingDirection) {
    let newPositionX = positionX;
    let newPositionY = positionY;

    if (movingDirection === "W") {
      newPositionY -= moveStep;
    } else if (movingDirection === "A") {
      newPositionX -= moveStep;
    } else if (movingDirection === "S") {
      newPositionY += moveStep;
    } else if (movingDirection === "D") {
      newPositionX += moveStep;
    }

    const hitWall =
      newPositionX < 0 ||
      newPositionX > window.innerWidth - 50 ||
      newPositionY < 0 ||
      newPositionY > window.innerHeight - 50;
    const hitRock = isColliding(newPositionX, newPositionY);

    if (hitWall || hitRock) {
      movingDirection = null;
    } else {
      positionX = newPositionX;
      positionY = newPositionY;
      block.style.left = positionX + "px";
      block.style.top = positionY + "px";
      requestAnimationFrame(moveContinuously);
      const playerRect = block.getBoundingClientRect();
      const image = document.getElementById("ab");
      const imageRect = image.getBoundingClientRect();
      if (
        playerRect.right > imageRect.left &&
        playerRect.left < imageRect.right &&
        playerRect.bottom > imageRect.top &&
        playerRect.top < imageRect.bottom
      ) {
        defeat1();
      }
    }
  }
}

document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();
  if (["W", "A", "S", "D"].includes(key) && !isMoving) {
    movingDirection = key;
    isMoving = true;
    moveContinuously();
    battle.volume = 0.5;
    battle.play();
    battle.loop = true;
  } else if (["W", "A", "S", "D"].includes(key) && movingDirection === null) {
    movingDirection = key;
    moveContinuously();
    battle.volume = 0.5;
    battle.play();
    battle.loop = true;
  }
});

img.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function changetext1() {
  click.play();
  document.getElementById("t1").classList.add("hidden");
  document.getElementById("t2").classList.remove("hidden");
}
function changetext2() {
  click.play();
  document.getElementById("t2").classList.add("hidden");
  document.getElementById("t3").classList.remove("hidden");
}
function changetext3() {
  click.play();
  document.getElementById("t3").classList.add("hidden");
  document.getElementById("t4").classList.remove("hidden");
}
function changetext4() {
  click.play();
  document.getElementById("t4").classList.add("hidden");
  document.getElementById("t5").classList.remove("hidden");
}
function nextroom() {
  click.play();
  window.location.href = "ambomasnow.html";
}

function defeat1() {
  click.play();
  modal2.style.display = "block";
}
function defeat2() {
  click.play();
  document.getElementById("de1").classList.add("hidden");
  document.getElementById("de2").classList.remove("hidden");
}
function defeat3() {
  click.play();
  document.getElementById("de2").classList.add("hidden");
  document.getElementById("de3").classList.remove("hidden");
}
function greatball() {
  click.play();
  document.getElementById("de3").classList.add("hidden");
  document.getElementById("gb").classList.remove("hidden");
}

function nextgame() {
  window.location.href = "https://lqqx2h.csb.app/";
}
