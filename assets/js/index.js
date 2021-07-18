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

// Service Workers
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.error(error.message)
  })
}