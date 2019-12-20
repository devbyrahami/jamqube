import React from "react";
import Pads from "../components/pads.component";
import kick from "../assets/sound/kick.mp3";
import snare from "../assets/sound/snare.mp3";
import hat from "../assets/sound/hat.mp3";
// import { Howl } from "howler";

/*
1.create onclick function for each pads = trasnform,opacity and sound
*/

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      allPads: [
        {
          src: kick,
          name: "kick",
          className: "pad1",
          id: 1
        },
        {
          src: snare,
          name: "snare",
          className: "pad2",
          id: 2
        },
        {
          src: hat,
          name: "hat",
          className: "pad3",
          id: 3
        },
        {
          src: "../assets/sound/clap.mp3",

          name: "clap",
          className: "pad4",
          id: 4
        },
        {
          src: "../assets/sound/cymbal.mp3",

          name: "cymbal",
          className: "pad5",
          id: 5
        },
        {
          src: "../assets/sound/kick.mp3",
          name: "kick",
          className: "pad6",
          id: 6
        },
        {
          src: "../assets/sound/cMaj7.mp3",
          name: "keys 1",
          className: "pad7",
          id: 7
        },
        {
          src: "../assets/sound/gMaj7.mp3",
          name: "keys 2",
          className: "pad8",
          id: 8
        },
        {
          src: "../assets/sound/fMaj7.mp3",
          name: "keys 3",
          className: "pad9",
          id: 9
        },
        {
          src: "../assets/sound/fMaj7.mp3",
          name: "keys 4",
          className: "pad10",
          id: 10
        },
        {
          src: "../assets/sound/fMaj7.mp3",
          name: "keys 5",
          className: "pad11",
          id: 11
        },
        {
          src: "../assets/sound/fMaj7.mp3",
          name: "keys 6",
          className: "pad12",
          id: 12
        }
      ]
    };
  }

  /*
  SoundPlay = src => {
    const sounds = new Howl({
      src
    });
    sounds.play();
  };
  */

  onClickSound = () => {
    let audio = new Audio(kick);
    audio.play();
  };

  onClickChange = e => {
    const newPad = e.target;
    newPad.style.transform = "scale(-0.9)";
    newPad.style.transition = "0.01s ";
    newPad.style.opacity = "0.5";

    if (newPad.matches(".padName")) {
      newPad.style.transform = "scale(1)";
      newPad.style.opacity = "1";
    }
    //---append alert box ,LATER ADD THE INSTALLATION FOR IONICON---

    // const proTip = document.querySelector(".alert");
    // const markup = ` <div class="alert"><h3 class="pro-tip"><ion-icon name="close" class="icon-close"></ion-icon><span class="tipColor">Pro Tip: </span> Use your Keyboard <br> for better experience.</h3></div>`;
    // proTip.insertAdjacentHTML("beforeend", markup);
  };

  render() {
    return (
      <div className="pads">
        <div className="container">
          {this.state.allPads.map(({ id, name, className, src }) => (
            <Pads
              key={id}
              name={name}
              className={className}
              src={src}
              onClickSound={this.onClickSound}
              onClickChange={this.onClickChange}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Directory;
