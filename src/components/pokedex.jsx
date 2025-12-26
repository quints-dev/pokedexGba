import { useState } from "react";
import Screen from "./screen";
import Controls from "./controls";
import "../styles/pokedex.css";

export default function Pokedex() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="pokedex">
      <Screen pokemon={pokemon} loading={loading} error={error} />
      <Controls />
      setPokemon={setPokemon}
      setLoading={setLoading}
      setError={setError}
    </div>
  );
}
