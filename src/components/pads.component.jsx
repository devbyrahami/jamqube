import React from "react";
import "./pads.styles.css";

//container and the pads
const Pads = ({ name, id, className, src, onClickSound, onClickChange }) => (
  <div className="pads">
    <div className="container " key={id} src={src} onClick={onClickSound}>
      <div className="alert">
        <div className={className} key={id} onClick={onClickChange}>
          <div className="padName">{name}</div>
        </div>
      </div>
    </div>
  </div>
);

// <audio key={id} src={src} onClick={onClickSound}></audio>

export default Pads;

/*------PREVIOUS CODE-------
const Pads = () => (
  <div className="pads">
    <div className="container">
      <div className="pad1">
        <div className="padName">Kick</div>
      </div>
      <div className="pad2">
        <div className="padName">Snare</div>
      </div>
      <div className="pad3">
        <div className="padName">Hat</div>
      </div>
      <div className="pad4">
        <div className="padName">Cymbal</div>
      </div>
      <div className="pad5">
        <div className="padName">Shaker</div>
      </div>
      <div className="pad6">
        <div className="padName">bell</div>
      </div>
      <div className="pad7">
        <div className="padName">snap</div>
      </div>
      <div className="pad8">
        <div className="padName">tom</div>
      </div>
      <div className="pad9">
        <div className="padName">Keys1</div>
      </div>
      <div className="pad10">
        <div className="padName">Keys2</div>
      </div>
      <div className="pad11">
        <div className="padName">Keys3</div>
      </div>
      <div className="pad12">
        <div className="padName">Keys4</div>
      </div>
    </div>
  </div>
);

*/
