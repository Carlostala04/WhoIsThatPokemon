const API_URL = "https://pokeapi.co/api/v2/pokemon/";
const GENERATION_URL = "https://pokeapi.co/api/v2/generation/";

export async function obtenerGeneracion(id) {
  const response = await fetch(`${GENERATION_URL}${id}`);
  const dataGen = await response.json();
  return dataGen;
}

export async function obtenerPokemonAleatorio(generationId = 1) {
  const generacion = await obtenerGeneracion(generationId);
  const especies = generacion.pokemon_species;
  const especieAleatoria = especies[Math.floor(Math.random() * especies.length)];
  const response = await fetch(`${API_URL}${especieAleatoria.name}`);
  const data = await response.json();
  return data;
}
