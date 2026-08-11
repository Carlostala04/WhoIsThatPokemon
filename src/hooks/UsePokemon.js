import { useCallback, useEffect, useState } from "react";
import { obtenerPokemonAleatorio } from "../service/pokemon";

export function usePokemon() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadIndex, setReloadIndex] = useState(0);

  useEffect(() => {
    let ignore = false;

    obtenerPokemonAleatorio()
      .then((data) => {
        if (ignore) return;
        setPokemon(data);
        setLoading(false);
      })
      .catch((err) => {
        if (ignore) return;
        setError(err);
        setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [reloadIndex]);

  const refetch = useCallback(() => {
    setLoading(true);
    setError(null);
    setReloadIndex((i) => i + 1);
  }, []);

  return { pokemon, loading, error, refetch };
}
