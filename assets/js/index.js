// Plugins
import Autoplay from "./plugins/Autoplay.js";
import Autopause from "./plugins/Autopause.js"
// Utils
import MediaPlayer from "./utils/MediaPlayer.js";

const video = document.querySelector("video");
const btnPlay = document.querySelector("#togglePlay");
const btnMute = document.querySelector("#mute");

const player = new MediaPlayer({
  el: video,
  plugins: [new Autoplay(), new Autopause()],
});

btnPlay.addEventListener("click", () => player.togglePlay());
btnMute.addEventListener("click", () => player.toggleMute());

let values = "aaarbbcaaaaaabb";
let dictionary = {};

values.split("").forEach((el) => {
  if (dictionary[el]) {
    dictionary[el] += 1;
  } else {
    dictionary[el] = 1;
  }
});

console.log(dictionary)


