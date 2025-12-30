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

      {!loading && !error && pokemon && (
        <div className="pokemonInfo">
          <div className="infoRow">
            <span className="infoLabel">ALT:</span>
            <span className="infoValue">
              {(pokemon.height / 10).toFixed(1)}m
            </span>
          </div>
          <div className="infoRow">
            <span className="infoLabel">PES:</span>
            <span className="infoValue">
              {(pokemon.weight / 10).toFixed(1)}kg
            </span>
          </div>
          <div className="infoRow">
            <span className="infoLabel">TIP:</span>
            <span className="infoValue">
              {pokemon.types.map((t) => t.type.name.toUpperCase()).join("/")}
            </span>
          </div>
          <div className="infoRow">
            <span className="infoLabel">MOV:</span>
            <span className="infoValue">
              {pokemon.moves
                .slice(0, 2)
                .map((m) => m.move.name.toUpperCase())
                .join("/")}
            </span>
          </div>
        </div>
      )}

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
