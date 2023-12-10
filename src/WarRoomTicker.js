import './WarRoomTicker.css';
import React from "react";

function WarRoomTicker() {
  return (
    <div className="WarRoomTicker">
      <div className="tickerPrompt">
        <h2>
          WAR ROOM UPDATES &gt;
        </h2>
      </div>

      <div className="tickerText">
      <h2>
        <span>
          ¿Cuál es la unica manera que nos salvamos?
        </span>
        {/* <span>
          Using 1% of the APIs you pay for
        </span>
        <span>
          Checking 10 different systems to diagnose a problem
        </span> */}
        <span>
          Write your new shiny service in Go
        </span>
        <span>
          Siempre la familia será todo
        </span>
      </h2>
      </div>
    </div>
  );
}

export default WarRoomTicker;
