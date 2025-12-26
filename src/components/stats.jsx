export default function Stats({ pokemon }) {
  if (!pokemon) return null;

  return (
    <div className="stats">
      <h3>Stats</h3>

      {pokemon.stats.map((stat) => (
        <div key={stat.stat.name} className="stat">
          {" "}
          <span className="stat-name"> {stat.stat.name.toUpperCase()}</span>
          <div className="stat-bar">
            <div
              className="stat-fill"
              style={{ width: `${stat.base_stat / 2}%` }}
            ></div>
            <span className="stat-value">{stat.base_stat}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
