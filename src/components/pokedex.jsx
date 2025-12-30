import { useState } from "react";
import Lcd from "./lcd";
import Controls from "./controls";
import "../styles/pokedex.css";

export default function Pokedex() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

  return (
    <div className="mainBody">
      <div className="screenContainer">
        <div className="innerScreen">
          <Lcd
            pokemon={pokemon}
            loading={loading}
            error={error}
            query={query}
            setQuery={setQuery}
          />
        </div>
      </div>

      <Controls
        query={query}
        setQuery={setQuery}
        setPokemon={setPokemon}
        setLoading={setLoading}
        setError={setError}
      />
    </div>
  );
}
