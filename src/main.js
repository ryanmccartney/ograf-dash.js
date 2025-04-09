import "./style.css";
import { MediaPlayer } from "dashjs";

import "../node_modules/dashjs/contrib/akamai/controlbar/ControlBar.js";
import "../node_modules/dashjs/contrib/akamai/controlbar/controlbar.css";

const url = "https://rdmedia.bbc.co.uk/bbb/2/client_manifest-common_init.mpd";
const player = MediaPlayer().create();

document.querySelector("#app").innerHTML = `
  <div>
    <h1>OGraf over DASH video</h1>

    <div id="container">    
      <video id="videoPlayer" preload="auto" autoplay=""></video>

      <div id="videoControlBarContainer">
        <div id="videoController" class="video-controller unselectable">
        <div id="playPauseBtn" class="btn-play-pause" title="Play/Pause">
          <span id="iconPlayPause" class="icon-play"></span>
        </div>
        <span id="videoTime" class="time-display">00:00:00</span>
        <div id="fullscreenBtn" class="btn-fullscreen control-icon-layout" title="Fullscreen">
          <span class="icon-fullscreen-enter"></span>
        </div>
        <div id="bitrateListBtn" class="control-icon-layout" title="Bitrate List">
          <span class="icon-bitrate"></span>
        </div>
        <input type="range" id="volumebar" class="volumebar" value="1" min="0" max="1" step=".01"/>
        <div id="muteBtn" class="btn-mute control-icon-layout" title="Mute">
          <span id="iconMute" class="icon-mute-off"></span>
        </div>
        <div id="trackSwitchBtn" class="control-icon-layout" title="A/V Tracks">
          <span class="icon-tracks"></span>
        </div>
        <div id="captionBtn" class="btn-caption control-icon-layout" title="Closed Caption">
          <span class="icon-caption"></span>
        </div>
        <span id="videoDuration" class="duration-display">00:00:00</span>
        <div class="seekContainer">
          <div id="seekbar" class="seekbar seekbar-complete">
            <div id="seekbar-buffer" class="seekbar seekbar-buffer"></div>
            <div id="seekbar-play" class="seekbar seekbar-play"></div>
          </div>
        </div>
        <div id="thumbnail-container" class="thumbnail-container">
          <div id="thumbnail-elem" class="thumbnail-elem"></div>
          <div id="thumbnail-time-label" class="thumbnail-time-label"></div>
        </div>
      </div>
    </div>

    <div id="graphics"></div>
  </div>

  </div>
`;

player.initialize(document.querySelector("#videoPlayer"), url, true);

const controlbar = new ControlBar(player);
controlbar.initialize();
