var numberOfDrums = document.querySelectorAll(".drum").length;
// console.log(numberOfDrums);
for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var drum = this.innerHTML;
    playSound(drum);
  });
}
function playSound(drum) {
  switch (drum) {
    case "w":
      console.log("w");
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      console.log("a");
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      console.log("s");
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      console.log("d");
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      console.log("j");
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      console.log("k");
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      console.log("l");
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:

  }
}
