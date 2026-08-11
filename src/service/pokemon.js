const API_URL = "https://pokeapi.co/api/v2/pokemon/";
export async function obtenerPokemonAleatorio() {
  let id = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  const response = await fetch(`${API_URL}${id}`);
  const data = await response.json();
  return data;
}
