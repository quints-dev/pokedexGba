import "../styles/pokedex.css";

export default function PokedexShell({ children }) {
  return (
    <div className="pokedex">
      {/* TOP BAR */}
      <div className="topBar">
        <div className="mainBorder">
          <div className="mainLens"></div>
        </div>

        <div className="smallLights">
          <div className="lightRed"></div>
          <div className="lightYellow"></div>
          <div className="lightGreen"></div>
        </div>
      </div>

      {/* BODY */}
      <div className="mainBody">
        <div className="screenContainer">
          <div className="subLights"></div>

          {/* LCD */}
          <div className="innerScreen">{children}</div>
        </div>

        {/* CONTROLS */}
        <div className="controls">
          <div className="bigBlue"></div>

          <div className="dpad">
            <div className="v"></div>
            <div className="h"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
