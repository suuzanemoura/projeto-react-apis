import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PokemonCard } from "../components/PokemonCard";
import { BASE_URL } from "../constants/constants";
import { GlobalContext } from "../contexts/GlobalContext";
import { PokedexContext } from "../contexts/PokedexContext";
import Pokebola from "../assets/imgs/PokedexVazia.png";
import {
  Pagination,
  PaginationContainer,
  PaginationNext,
  PaginationPage,
  PaginationPageGroup,
  PaginationPrevious,
  PaginationSeparator,
} from "@ajna/pagination";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useNavigate, useParams } from "react-router-dom";
import { goToPokedexNumberPage, goToPokedexPage } from "../routes/coordinator";

export const PokedexPage = () => {
  const { pokedex, removeFromPokedex } = useContext(GlobalContext);
  const {
    pages,
    pagesCount,
    currentPage,
    setCurrentPage,
    handlePageChange,
    offset,
    setOffset,
    filteredPokedex,
    filteredPokedexPage,
  } = useContext(PokedexContext);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params.pokedexPage === undefined) {
      setCurrentPage(1);
      setOffset(0);
    } else {
      setOffset((params.pokedexPage - 1) * 24);
    }
  }, [params.pokedexPage, currentPage, offset]);

  useEffect(() => {
    if (pokedex.length === 24) {
      goToPokedexPage(navigate);
    }
  }, [pokedex, navigate]);

  return (
    <Flex direction="column">
      <Header />
      <Flex align={"center"} justify={"center"}>
        <Box
          as="main"
          py={"3.75rem"}
          px={{ base: "0.5rem", sm: "1rem", md: "2rem" }}
          mb={pokedex.length === 0 ? 0 : "2rem"}
          minH={"90vh"}
          w={{
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
              Meus Pokémons
            </Heading>
            {pokedex.length === 0 ? (
              <Flex
                align={"center"}
                justify={"center"}
                flexDirection={"column"}
                gap={"1rem"}
              >
                <Image
                  src={Pokebola}
                  alt={"Pokedex vazia."}
                  w={"20rem"}
                  objectFit={"contain"}
                  ml={"1.5rem"}
                />
                <Text textAlign={"center"}>
                  Pokedex vazia! <br />
                  Capture seus pokémons favoritos.
                </Text>
              </Flex>
            ) : params.pokedexPage === undefined ? (
              <>
                {filteredPokedex().map((pokemon) => {
                  return (
                    <PokemonCard
                      key={pokemon.name}
                      pokemonUrl={`${BASE_URL}${pokemon.name}`}
                      removeFromPokedex={removeFromPokedex}
                    />
                  );
                })}
              </>
            ) : (
              <>
                {filteredPokedexPage().map((pokemon) => {
                  return (
                    <PokemonCard
                      key={pokemon.name}
                      pokemonUrl={`${BASE_URL}${pokemon.name}`}
                      removeFromPokedex={removeFromPokedex}
                    />
                  );
                })}
              </>
            )}
            {pokedex.length > 24 ? (
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
                          ? goToPokedexPage(navigate)
                          : goToPokedexNumberPage(navigate, currentPage - 1);
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
                              ? goToPokedexPage(navigate)
                              : goToPokedexNumberPage(navigate, page);
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
                      onClick={() =>
                        goToPokedexNumberPage(navigate, currentPage + 1)
                      }
                    >
                      <Text>
                        <ChevronRightIcon color={"pokedex.blue.300"} />
                      </Text>
                    </PaginationNext>
                  </PaginationContainer>
                </Pagination>
              </Stack>
            ) : (
              <></>
            )}
          </Box>
        </Box>
      </Flex>
      <Footer />
    </Flex>
  );
};
