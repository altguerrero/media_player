function MediaPlayer(config) {
  this.media = config.el;
  this.plugins = config.plugins || [];

  this._initPlugins();
}

// Init
MediaPlayer.prototype._initPlugins = function () {
  const player = {
    play: () => this.play(),
    pause: () => this.pause(),
    media: this.media,
    get muted() {
      return this.media.muted;
    },
    set muted(value) {
      this.media.muted = value;
    },
  };

  this.plugins.forEach((plugin) => {
    plugin.run(player);
  });
};

// Play
MediaPlayer.prototype.play = function () {
  this.media.play();
};
// Pause
MediaPlayer.prototype.pause = function () {
  this.media.pause();
};
// Toggle Play
MediaPlayer.prototype.togglePlay = function () {
  if (this.media.paused) {
    this.play();
  } else {
    this.pause();
  }
};
// Mute
MediaPlayer.prototype.mute = function () {
  this.media.muted = true;
};
MediaPlayer.prototype.unMute = function () {
  this.media.muted = false;
};
// Toggle Mute
MediaPlayer.prototype.toggleMute = function () {
  this.media.muted = !this.media.muted;
};

export default MediaPlayer;
