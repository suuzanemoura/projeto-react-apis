import { usePagination } from "@ajna/pagination";
import { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../constants/constants";
import useRequestData from "../hooks/useRequestData";

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const pokemonsTotal = 1008;
  const [offset, setOffset] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState(
    JSON.parse(localStorage.getItem("pokemons")) || []
  );

  const [pokeList, isLoading, loaded, error] = useRequestData(
    [],
    `${BASE_URL}?offset=${0}&limit=${pokemonsTotal}`
  );

  const { pages, pagesCount, currentPage, setCurrentPage, pageSize } =
    usePagination({
      total: pokemonsTotal - pokedex.length,
      limits: {
        outer: 1,
        inner: 1,
      },
      initialState: {
        pageSize: 24,
        currentPage: 1,
      },
    });

  const handlePageChange = (nextPage) => {
    setCurrentPage(nextPage);
  };

  const addToPokedex = (pokemonToAdd) => {
    const newPokedex = [...pokedex, pokemonToAdd];
    setPokedex(newPokedex);
  };

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove
    );
    setPokedex(newPokedex);
  };

  const filteredPokelistHome = () => {
    return pokeList.results
      .filter(
        (pokemon) =>
          !pokedex.find(
            (pokemonInPokedex) => pokemon.name === pokemonInPokedex.name
          )
      )
      .slice(offset, pageSize);
  };
  const filteredPokelist = () => {
    return pokeList.results
      .filter(
        (pokemon) =>
          !pokedex.find(
            (pokemonInPokedex) => pokemon.name === pokemonInPokedex.name
          )
      )
      .slice(offset, offset + pageSize);
  };

  useEffect(() => {
    if (loaded) {
      setPokemons(filteredPokelistHome());
    }

    if (loaded && offset > 0) {
      setPokemons(filteredPokelist());
    }
  }, [loaded, offset, pokedex]);

  useEffect(() => {
    localStorage.setItem("pokemons", JSON.stringify(pokedex));
  }, [pokedex]);

  return (
    <GlobalContext.Provider
      value={{
        pokemons,
        isLoading,
        loaded,
        error,
        pokedex,
        setPokedex,
        pages,
        pagesCount,
        currentPage,
        setCurrentPage,
        setOffset,
        handlePageChange,
        addToPokedex,
        removeFromPokedex,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
