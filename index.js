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
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      console.log("a");
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      console.log("s");
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      console.log("d");
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      console.log("j");
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      console.log("k");
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      console.log("l");
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log("l");
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
  }
}
