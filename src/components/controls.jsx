import { useState } from "react";
import Screen from "./screen";
import Controls from "./controls";
import "../styles/pokedex.css";

export default function Pokedex() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="gba-shell">
      <div className="screen">
        <div className="screen-frame">
          <div className="lcd">
            <Screen pokemon={pokemon} loading={loading} error={error} />
          </div>
        </div>
      </div>

      <Controls
        setPokemon={setPokemon}
        setLoading={setLoading}
        setError={setError}
      />
    </div>
  );
}
