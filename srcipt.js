window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  let play_chicken_btn = document.getElementById("play_chicken");
  play_chicken_btn.addEventListener("click", play_chicken);

  let play_horse_btn = document.getElementById("play_horse");
  play_horse_btn.addEventListener("click", play_horse);

  let play_sheep_btn = document.getElementById("play_sheep");
  play_sheep_btn.addEventListener("click", play_sheep);
});

function play_chicken() {
  console.log("play_chicken");
  var chicken = new Audio("./audio/chicken.mp3");
  chicken.play();
}

function play_horse() {
  console.log("play_horse");
  var horse = new Audio("./audio/horse.mp3");
  horse.play();
}

function play_sheep() {
  console.log("play_sheep");
  var sheep = new Audio("./audio/sheep.mp3");
  sheep.play();
}
