console.log("Preload running...");

// loop through all the content you want to preload
var images = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}

// images and sounds
preload(
  "images/abomasnow.png",
  "images/arena.png",
  "images/characterfinal.png",
  "images/ice.png",
  "images/fire.png",
  "images/lapras.png",
  "images/megaabmosnow.png",
  "images/smoothstone.png",
  "images/standstill.png",
  "images/text1.png",
  "images/text2.png",
  "images/text3.png",
  "images/text4.png",
  "images/text5.png",
  "images/defeat1.png",
  "images/defeat2.png",
  "images/defeat3.png",
  "images/greatball.png"
);
