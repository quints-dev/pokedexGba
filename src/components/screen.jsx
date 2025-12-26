export default function Screen({ pokemon, loading, error }) {
  return (
    <div className="lcd">
      <div className="lcd-header">
        <span className="lcd-title">POKéDEX</span>
      </div>

      <div className="lcd-content">
        <div className="pokemon-view">
          {loading && <p>Cargando...</p>}
          {error && <p className="error">{error}</p>}

          {pokemon && (
            <>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <p className="pokemon-name">{pokemon.name}</p>
            </>
          )}
        </div>

        {pokemon && (
          <div className="pokemon-stats">
            {pokemon.stats.map((stat) => (
              <div key={stat.stat.name} className="stat">
                <span>{stat.stat.name.slice(0, 3).toUpperCase()}</span>
                <span>{stat.base_stat}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="lcd-footer">
        <input type="text" placeholder="Buscar Pokémon" className="lcd-input" />
      </div>
    </div>
  );
}
