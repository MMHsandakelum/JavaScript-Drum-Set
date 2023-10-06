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
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "a":
      console.log("a");
      break;
    default:
      console.log("end");
  }
}
