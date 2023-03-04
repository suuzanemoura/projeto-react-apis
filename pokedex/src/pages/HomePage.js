import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/constants";
import {
  goToPokemonDetailsPage,
  goToHomePage,
  goToPokedexPage,
  goToNumberPage,
} from "../routes/coordinator";
import { Box, Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const HomePage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [data, isLoading, loaded, error] = useRequestData(
    [{ results: { name: "Carregando", url: "oi" } }],
    `${BASE_URL}?offset=${20 * (params.pageNumber - 1)}&limit=20`
  );

  const [pagination, setPagination] = useState(1);

  return (
    <Flex direction="column" flex="1">
      <Header />
      <Box as="main" flex="1">
        <h1>HomePage</h1>
        <button onClick={() => goToPokedexPage(navigate)}>Pokedex</button>
        {params.pageNumber === undefined ? (
          <></>
        ) : params.pageNumber === 2 ? (
          <button
            onClick={() => {
              setPagination(pagination - 1);
              goToHomePage(navigate);
            }}
          >
            Voltar Página
          </button>
        ) : (
          <button
            onClick={() => {
              setPagination(pagination - 1);
              goToNumberPage(navigate, pagination - 1);
            }}
          >
            Voltar Página
          </button>
        )}

        <button
          onClick={() => {
            setPagination(pagination + 1);
            goToNumberPage(navigate, pagination + 1);
          }}
        >
          Próxima Página
        </button>
        <button onClick={() => goToPokemonDetailsPage(navigate, "pikachu")}>
          Detalhes do Pokemon
        </button>

        {error ? (
          <p>Erro de requisição, tente novamente</p>
        ) : loaded ? (
          data.results.map((pokemon) => {
            return (
              <div key={pokemon.url}>
                <h1>{pokemon.name}</h1>
                <p>Url: {pokemon.url}</p>
              </div>
            );
          })
        ) : (
          <p>Carregando</p>
        )}
      </Box>
      <Footer />
    </Flex>
  );
};
