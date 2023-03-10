import { Box, Flex, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PokemonCard } from "../components/PokemonCard";
import { BASE_URL } from "../constants/constants";
import { GlobalContext } from "../contexts/GlobalContext";

export const PokedexPage = () => {
  const { pokedex, removeFromPokedex } = useContext(GlobalContext);

  return (
    <Flex direction="column" flex="1">
      <Header />
      <Box
        as="main"
        flex="1"
        py={"3.75rem"}
        px={"2rem"}
        mb={"2rem"}
        justifyContent={"center"}
        display={"flex"}
        minH={"70vh"}
      >
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          gap={"1.5rem"}
          w={"86rem"}
          justifyContent={"left"}
        >
          <Heading as="h1" size="xl" mb={"2rem"} w={"full"}>
            Meus Pokémons
          </Heading>
          {pokedex.map((pokemon) => {
            return (
              <PokemonCard
                key={pokemon.name}
                pokemonUrl={`${BASE_URL}${pokemon.name}`}
                removeFromPokedex={removeFromPokedex}
              />
            );
          })}
        </Box>
      </Box>
      <Footer />
    </Flex>
  );
};
