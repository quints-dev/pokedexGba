import "../styles/pokedex.css";

export default function PokedexShell({ children }) {
  return (
    <div className="pokedex">
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
      {children}
    </div>
  );
}
