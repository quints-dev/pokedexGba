import { useState } from "react";
import { getPokemon } from "../services/pokeApi";

export default function Controls({ setPokemon, setLoading, setError }) {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (!query) return;

    try {
      setLoading(true);
      setError("");
      const data = await getPokemon(query);
      setPokemon(data);
    } catch {
      setError("Pokémon no encontrado");
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="controls">
      <input
        type="text"
        placeholder="Buscar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />

      <button onClick={handleSearch} disabled={!query}>
        A
      </button>
    </div>
  );
}
