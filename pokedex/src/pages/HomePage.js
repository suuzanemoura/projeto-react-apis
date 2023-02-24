import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  goToPokedex,
  goToNextPage,
  goToPokemonDetails,
} from "../routes/coordinator";

export const HomePage = () => {
  const navigate = useNavigate();

  const [pagination, setPagination] = useState(1);

  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={() => goToPokedex(navigate)}>Pokedex</button>
      <button
        onClick={() => {
          setPagination((pagination) => pagination + 1);
          goToNextPage(navigate, pagination);
        }}
      >
        Próxima Página
      </button>
      <button onClick={() => goToPokemonDetails(navigate, "pikachu")}>
        Detalhes do Pokemon
      </button>
    </div>
  );
};
