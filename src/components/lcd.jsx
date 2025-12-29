export default function LCD({ pokemon, loading, error, query, setQuery }) {
  return (
    <div className="lcd">
      <div className="lcdHeader">POKéDEX</div>

      <div className="lcdContent">
        {error && <p className="lcdMessage">{error}</p>}

        {loading && <p className="lcdMessage">BUSCANDO…</p>}

        {!loading && !error && pokemon && (
          <>
            <div className="pokemonView">
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <div className="pokemonName">{pokemon.name.toUpperCase()}</div>
            </div>

            <div className="pokemonStats">
              {pokemon.stats.map((s) => (
                <div className="stat" key={s.stat.name}>
                  <span>{s.stat.name.slice(0, 3).toUpperCase()}</span>
                  <span>{s.base_stat}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {!loading && !error && !pokemon && (
          <p className="lcdMessage">INGRESA UN POKÉMON</p>
        )}
      </div>

      <div className="lcdFooter">
        <input
          className="lcdInput"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar Pokémon"
        />
      </div>
    </div>
  );
}
