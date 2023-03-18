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
      setOffset((params.pageNumber - 1) * 24);
    }
  }, [params.pageNumber, setCurrentPage, setOffset]);

  useEffect(() => {
    if (params.pageNumber > 1) {
      setCurrentPage(params.pageNumber);
    }
  }, []);

  return (
    <Flex direction="column">
      <Header />
      <Flex align={"center"} justify={"center"}>
        <Box
          as="main"
          py={"3.75rem"}
          px={{ base: "0.5rem", sm: "1rem", md: "2rem" }}
          maxW={{
            base: "30rem",
            xl: "60.5rem",
            "3xl": "89.5rem",
            "5xl": "118.5rem",
          }}
        >
          <Box
            display={"flex"}
            flexWrap={"wrap"}
            gap={"1.5rem"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Heading
              as="h1"
              size={{
                base: "lg",
                md: "xl",
              }}
              mb={"2rem"}
              w={"100%"}
              textAlign={{
                base: "center",
                xl: "left",
              }}
            >
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
                    Por favor, verifique sua internet. Depois recarregue a
                    página e tente novamente.
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
                    w={[6, 6, 6, 8]}
                    h={[6, 6, 6, 8]}
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
                        fontSize={["xs", "xs", "xs", "sm"]}
                        w={[6, 6, 6, 8]}
                        h={[6, 6, 6, 8]}
                        jumpSize={1}
                      />
                    }
                  >
                    {pages.map((page) => (
                      <PaginationPage
                        w={[6, 6, 6, 8]}
                        h={[6, 6, 6, 8]}
                        bg="white"
                        color={"pokedex.blue.300"}
                        key={`pagination_page_${page}`}
                        page={page}
                        onClick={() => {
                          page === 1
                            ? goToHomePage(navigate)
                            : goToNumberPage(navigate, page);
                        }}
                        fontSize={["xs", "xs", "xs", "sm"]}
                        _hover={{
                          bg: "pokedex.blue.100",
                          color: "white",
                        }}
                        _current={{
                          bg: "pokedex.blue.200",
                          color: "white",
                          fontSize: ["xs", "xs", "xs", "sm"],
                          w: [6, 6, 6, 8],
                          h: [6, 6, 6, 8],
                        }}
                      />
                    ))}
                  </PaginationPageGroup>
                  <PaginationNext
                    w={[6, 6, 6, 8]}
                    h={[6, 6, 6, 8]}
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
      </Flex>
      <Footer />
    </Flex>
  );
};
