import { usePagination } from "@ajna/pagination";
import { createContext, useContext, useState } from "react";
import { GlobalContext } from "./GlobalContext";

export const PokedexContext = createContext();

export function PokedexContextProvider({ children }) {
  const [offset, setOffset] = useState(0);
  const { pokedex } = useContext(GlobalContext);
  const { pages, pagesCount, currentPage, setCurrentPage, pageSize } =
    usePagination({
      total: pokedex.length,
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

  const filteredPokedex = () => {
    let pokeList = [...pokedex];
    pokeList.sort((a, b) => {
      return a.id - b.id;
    });
    pokeList = pokeList.slice(offset, pageSize);
    return pokeList;
  };
  const filteredPokedexPage = () => {
    let pokeList = [...pokedex];
    pokeList.sort((a, b) => {
      return a.id - b.id;
    });
    pokeList = pokeList.slice(offset, offset + pageSize);
    return pokeList;
  };

  return (
    <PokedexContext.Provider
      value={{
        pages,
        pagesCount,
        currentPage,
        setCurrentPage,
        handlePageChange,
        offset,
        setOffset,
        filteredPokedex,
        filteredPokedexPage,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
}
