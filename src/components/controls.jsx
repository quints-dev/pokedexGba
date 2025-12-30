import { getPokemon } from "../services/pokeApi";

export default function Controls({
  setPokemon,
  setLoading,
  setError,
  query,
  setQuery,
}) {
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

  const handleReset = () => {
    setQuery("");
    setPokemon(null);
    setError("");
  };

  return (
    <div className="controls">
      <div className="dpad" onClick={handleReset} title="Reiniciar">
        <div className="v"></div>
        <div className="h"></div>
      </div>
      <button
        className="bigBlue"
        onClick={handleSearch}
        disabled={!query}
        title="Buscar"
      >
        Buscar
      </button>
    </div>
  );
}
