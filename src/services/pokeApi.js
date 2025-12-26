const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

export async function getPokemon(query) {
  const response = await fetch(`${BASE_URL}${query.toLowerCase()}`);

  if (!response.ok) {
    throw new Error("Pokémon no encontrado");
  }

  return await response.json();
}
