import { useRef, useState } from "react";

import "./App.css";
import { usePokemon } from "./hooks/UsePokemon";

const MAX_ATTEMPS = 3;

const GENERACIONES = [
  { id: 1, nombre: "Generación I - Kanto" },
  { id: 2, nombre: "Generación II - Johto" },
  { id: 3, nombre: "Generación III - Hoenn" },
  { id: 4, nombre: "Generación IV - Sinnoh" },
  { id: 5, nombre: "Generación V - Teselia" },
  { id: 6, nombre: "Generación VI - Kalos" },
  { id: 7, nombre: "Generación VII - Alola" },
  { id: 8, nombre: "Generación VIII - Galar" },
  { id: 9, nombre: "Generación IX - Paldea" },
];

function App() {
  const [generationId, setGenerationId] = useState(1);
  const [attemps, setAttemps] = useState(MAX_ATTEMPS);
  const { pokemon, loading, error, refetch } = usePokemon(generationId);
  const audioRef = useRef(null);
  const [pokemonName, setPokemonName] = useState("");
  const [isPokemon, setIsPokemon] = useState(false);
  const [message, setMessage] = useState("");
  const [winMessage, setWinMessage] = useState("");
  const [loseMessage, setLoseMessage] = useState("");

  const gameOver = isPokemon || attemps === 0;

  const resetRound = () => {
    setPokemonName("");
    setIsPokemon(false);
    setAttemps(MAX_ATTEMPS);
    setMessage("");
    setWinMessage("");
    setLoseMessage("");
  };

  const handleGenerationChange = (e) => {
    setGenerationId(Number(e.target.value));
    resetRound();
  };

  const verifyName = () => {
    if (gameOver || !pokemon) return;

    if (pokemon.name.toLocaleLowerCase() === pokemonName.toLocaleLowerCase()) {
      setIsPokemon(true);
      setMessage("");
      setWinMessage("Ganaste");
      return;
    }

    const remaining = attemps - 1;
    setAttemps(remaining);
    if (remaining === 0) {
      setLoseMessage(`No quedan mas intentos. Era ${pokemon.name}`);
    } else {
      setMessage(
        `Fallaste, intentalo de nuevo, te quedan ${remaining} de ${MAX_ATTEMPS}`,
      );
    }
  };

  const playAgain = () => {
    resetRound();
    refetch();
    audioRef.current?.play();
  };
  return (
    <>
      <main>
        <audio ref={audioRef} src="/audio/who_is_pokemon.mp3" />
        <div className="header">
          <h1>¿Quien es ese pokemon?</h1>
        </div>
        <div className="generation-select">
          <label htmlFor="generation">Generación:</label>
          <select
            id="generation"
            value={generationId}
            onChange={handleGenerationChange}
          >
            {GENERACIONES.map((gen) => (
              <option key={gen.id} value={gen.id}>
                {gen.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="guess">
          {loading && <p>Cargando...</p>}
          {error && <p>Ocurrio un error al cargar el pokemon</p>}
          {pokemon && (
            <img
              className={isPokemon ? "reveal" : "hide"}
              src={pokemon.sprites.front_shiny}
              alt="imagen pokemon"
            />
          )}
        </div>
        <div className="write-section">
          <input
            type="text"
            placeholder="Escribe el nombre del pokemon"
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)}
            disabled={gameOver}
          />
          {gameOver ? (
            <button onClick={playAgain}>jugar de nuevo</button>
          ) : (
            <button onClick={verifyName}>adivinar</button>
          )}
        </div>
        <span className="hint-message">{message}</span>
        <div className="message-reveal">
          <h3>{isPokemon ? winMessage : loseMessage}</h3>
        </div>
      </main>
    </>
  );
}

export default App;
