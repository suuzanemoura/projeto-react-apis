import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/constants";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Loading from "../assets/imgs/loading_pokeball.gif";
import { PokemonCard } from "../components/PokemonCard";

export const HomePage = () => {
  const params = useParams();

  const [pokemons, isLoading, loaded, error] = useRequestData(
    [],
    `${BASE_URL}?offset=${20 * (params.pageNumber - 1)}&limit=20`
  );

  const [pagination, setPagination] = useState(1);

  // {params.pageNumber === undefined ? (
  //   <></>
  // ) : params.pageNumber === 2 ? (
  //   <button
  //     onClick={() => {
  //       setPagination(pagination - 1);
  //       goToHomePage(navigate);
  //     }}
  //   >
  //     Voltar Página
  //   </button>
  // ) : (
  //   <button
  //     onClick={() => {
  //       setPagination(pagination - 1);
  //       goToNumberPage(navigate, pagination - 1);
  //     }}
  //   >
  //     Voltar Página
  //   </button>
  // )}

  // <button
  //   onClick={() => {
  //     setPagination(pagination + 1);
  //     goToNumberPage(navigate, pagination + 1);
  //   }}
  // >
  //   Próxima Página
  // </button>
  // <button onClick={() => goToPokemonDetailsPage(navigate, "pikachu")}>
  //   Detalhes do Pokemon
  // </button>

  return (
    <Flex direction="column" flex="1" minH={"100vh"}>
      <Header />
      <Box
        as="main"
        flex="1"
        py={"3.75rem"}
        px={"2rem"}
        justifyContent={"center"}
        display={"flex"}
      >
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          gap={"1.5rem"}
          w={"86rem"}
          justifyContent={"center"}
        >
          <Heading as="h1" size="xl" mb={"2.5rem"} w={"full"}>
            Todos os Pokémons
          </Heading>
          {error ? (
            <Flex align="center" justify="center" m="4rem">
              <Alert
                status="error"
                variant="subtle"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                height="200px"
                bg="pokedex.red.300"
                maxWidth="lg"
              >
                <AlertIcon boxSize="40px" mr={0} color="white" />
                <AlertTitle mt={4} mb={1} fontSize="lg">
                  Erro na requisição!
                </AlertTitle>
                <AlertDescription maxWidth="md">
                  Por favor, recarregue a página e tente novamente.
                </AlertDescription>
              </Alert>
            </Flex>
          ) : isLoading ? (
            <Flex align="center" justify="center" m="4rem">
              <Image
                src={Loading}
                alt="Animação da Pokébola carregando"
              ></Image>
            </Flex>
          ) : loaded ? (
            pokemons.results.map((pokemon) => {
              return <PokemonCard key={pokemon.url} pokemon={pokemon} />;
            })
          ) : (
            <Text>Erro de requisição, tente novamente</Text>
          )}
        </Box>
      </Box>
      <Footer />
    </Flex>
  );
};
