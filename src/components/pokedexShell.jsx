import "../styles/pokedex.css";

export default function PokedexShell({ children }) {
  return (
    <div className="pokedex">
      <div className="topBar">
        <div className="mainBorder">
          <div className="mainLens"></div>
        </div>
        <div className="smallLights">
          <div className="lightRed">
            <div className="lightYellow">
              <div className="lightGreen"></div>
            </div>
            <div className="mainBody">
              <div className="screenContainer">
                <div className="subLights">
                  <div className="innerScreen">{children}</div>
                </div>
                <div className="controls">
                  <div className="bigBlue">
                    <div className="dpad">
                      <div className="v"></div>
                      <div className="h"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
