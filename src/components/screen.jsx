export default function Screen({ pokemon, loading, error }) {
  if (loading) return <p className="boot-text">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  if (!pokemon) {
    return <p className="boot-text">Press A</p>;
  }

  return (
    <div className="pokemon-view">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p className="pokemon-name">{pokemon.name}</p>
    </div>
  );
}
