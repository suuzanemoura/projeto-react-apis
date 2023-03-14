import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Loading from "../assets/imgs/loading_pokeball.gif";
import { PokemonCard } from "../components/PokemonCard";

import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import {
  Pagination,
  PaginationPage,
  PaginationNext,
  PaginationPrevious,
  PaginationPageGroup,
  PaginationContainer,
  PaginationSeparator,
} from "@ajna/pagination";
import { goToHomePage, goToNumberPage } from "../routes/coordinator";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export const HomePage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const {
    pokemons,
    isLoading,
    loaded,
    error,
    pages,
    pagesCount,
    currentPage,
    setCurrentPage,
    setOffset,
    handlePageChange,
    addToPokedex,
  } = useContext(GlobalContext);

  useEffect(() => {
    if (params.pageNumber === undefined) {
      setCurrentPage(1);
      setOffset(0);
    } else {
      setOffset((params.pageNumber - 1) * 21);
    }
  }, [params.pageNumber, setCurrentPage, setOffset]);

  useEffect(() => {
    if (params.pageNumber > 1) {
      setCurrentPage(params.pageNumber);
    }
  }, []);

  return (
    <Flex direction="column" flex="1">
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
          justifyContent={"left"}
        >
          <Heading as="h1" size="xl" mb={"2rem"} w={"full"}>
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
                height="12.5rem"
                bg="pokedex.red.300"
                maxWidth="lg"
              >
                <AlertIcon boxSize="2.5rem" mr={0} color="white" />
                <AlertTitle mt={4} mb={1} fontSize="lg">
                  Erro na requisição!
                </AlertTitle>
                <AlertDescription maxWidth="md">
                  Por favor, verifique sua internet. Depois recarregue a página
                  e tente novamente.
                </AlertDescription>
              </Alert>
            </Flex>
          ) : isLoading ? (
            <Flex align="center" justify="center" m="4rem">
              <Image
                src={Loading}
                alt="Animação da Pokébola carregando"
                mixBlendMode={"lighten"}
              ></Image>
            </Flex>
          ) : loaded ? (
            pokemons.map((pokemon) => {
              return (
                <PokemonCard
                  key={pokemon.url}
                  pokemonUrl={pokemon.url}
                  addToPokedex={addToPokedex}
                />
              );
            })
          ) : (
            <Text>Carregando, por favor aguarde.</Text>
          )}
          <Stack w={"full"}>
            <Pagination
              pagesCount={pagesCount}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            >
              <PaginationContainer
                align="center"
                justify="center"
                mt={"2rem"}
                w="full"
              >
                <PaginationPrevious
                  w={8}
                  h={8}
                  mx={1}
                  _hover={{
                    bg: "yellow.400",
                  }}
                  bg="white"
                  onClick={() => {
                    currentPage === 2
                      ? goToHomePage(navigate)
                      : goToNumberPage(navigate, currentPage - 1);
                  }}
                >
                  <Text>
                    <ChevronLeftIcon color={"pokedex.blue.300"} />
                  </Text>
                </PaginationPrevious>
                <PaginationPageGroup
                  isInline
                  align="center"
                  separator={
                    <PaginationSeparator
                      bg="blue.300"
                      fontSize="sm"
                      w={8}
                      h={8}
                      jumpSize={5}
                    />
                  }
                >
                  {pages.map((page) => (
                    <PaginationPage
                      w={8}
                      h={8}
                      bg="white"
                      color={"pokedex.blue.300"}
                      key={`pagination_page_${page}`}
                      page={page}
                      onClick={() => {
                        page === 1
                          ? goToHomePage(navigate)
                          : goToNumberPage(navigate, page);
                      }}
                      fontSize="sm"
                      _hover={{
                        bg: "pokedex.blue.100",
                        color: "white",
                      }}
                      _current={{
                        bg: "pokedex.blue.200",
                        color: "white",
                        fontSize: "sm",
                        w: 8,
                        h: 8,
                      }}
                    />
                  ))}
                </PaginationPageGroup>
                <PaginationNext
                  w={8}
                  h={8}
                  mx={1}
                  _hover={{
                    bg: "yellow.400",
                  }}
                  bg="white"
                  onClick={() => goToNumberPage(navigate, currentPage + 1)}
                >
                  <Text>
                    <ChevronRightIcon color={"pokedex.blue.300"} />
                  </Text>
                </PaginationNext>
              </PaginationContainer>
            </Pagination>
          </Stack>
        </Box>
      </Box>
      <Footer />
    </Flex>
  );
};
