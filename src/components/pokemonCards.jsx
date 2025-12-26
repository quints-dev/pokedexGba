export default function PokemonCard({ pokemon }) {
  return (
    <div className="pokemon">
      <img
        src={pokemon.sprites?.front_default}
        alt={pokemon.name}
        width={96}
        height={96}
      />

      <h2>{pokemon.name}</h2>

      <p>{pokemon.types?.map((t) => t.type.name).join(", ")}</p>
    </div>
  );
}
