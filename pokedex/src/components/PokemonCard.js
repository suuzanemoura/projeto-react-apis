import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";

import useRequestData from "../hooks/useRequestData";
import Loading from "../assets/imgs/loading_pokeball.gif";
import Pokebola from "../assets/imgs/PokemonCard/Pokebola_Fundo.png";
import { getColors } from "../utils/ReturnCardColor";
import { getTypes } from "../utils/ReturnPokemonType";
import { useLocation, useNavigate } from "react-router-dom";
import { goToPokemonDetailsPage } from "../routes/coordinator";

export const PokemonCard = ({
  pokemonUrl,
  addToPokedex,
  removeFromPokedex,
}) => {
  const [pokemon, isLoading, loaded, error] = useRequestData(
    [],
    `${pokemonUrl}`
  );
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {error ? (
        <Flex align="center" justify="center">
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
            borderRadius={"1rem"}
          >
            <AlertIcon boxSize="2.5rem" mr={0} color="white" />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Erro na requisição!
            </AlertTitle>
            <AlertDescription maxWidth="md">
              Por favor, recarregue a página e tente novamente.
            </AlertDescription>
          </Alert>
        </Flex>
      ) : isLoading ? (
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Image
            src={Loading}
            alt="Animação da Pokébola carregando"
            mixBlendMode={"lighten"}
            w={"50%"}
          ></Image>
        </Flex>
      ) : loaded ? (
        <Box
          position={"relative"}
          display={"flex"}
          flexWrap={"wrap"}
          w={"27.5rem"}
          h={"13.125rem"}
          borderRadius={"1rem"}
          backgroundImage={Pokebola}
          backgroundRepeat={"no-repeat"}
          backgroundPosition={"right"}
          gap={"2rem"}
          backgroundColor={getColors(pokemon.types[0].type.name)}
          mt={"2rem"}
        >
          <Box px={"1.5rem"} pt={"1.5rem"}>
            <Text fontWeight={"700"} fontSize={"1rem"} fontFamily={"Inter"}>
              #{pokemon.id < 10 ? `0${pokemon.id}` : pokemon.id}
            </Text>
            <Heading
              as="h1"
              fontSize={"2rem"}
              fontFamily={"Inter"}
              fontWeight={"700"}
              textTransform="capitalize"
            >
              {pokemon.name}
            </Heading>
            <Image
              src={
                pokemon["sprites"]["other"]["official-artwork"]["front_default"]
              }
              alt={`Imagem do Pokémon ${pokemon.name}`}
              w={"12.063rem"}
              position={"absolute"}
              right={"0.3rem"}
              bottom={"4.5rem"}
            />
            <HStack mt={"0.4rem"}>
              {pokemon.types.map((type) => {
                return (
                  <Image
                    key={type.type.name}
                    src={getTypes(type.type.name)}
                    alt={`Imagem de Habilidade do Pokemon: Habilidade de ${type.type.name}`}
                  />
                );
              })}
            </HStack>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            w={"full"}
            px={"1.5rem"}
            pb={"1.5rem"}
          >
            <Button
              variant={"details"}
              onClick={() => goToPokemonDetailsPage(navigate, pokemon.name)}
            >
              Detalhes
            </Button>
            {location.pathname === "/pokedex" ? (
              <Button
                variant={"delete"}
                onClick={() => removeFromPokedex(pokemon)}
              >
                Excluir
              </Button>
            ) : (
              <Button variant={"catch"} onClick={() => addToPokedex(pokemon)}>
                Capturar!
              </Button>
            )}
          </Box>
        </Box>
      ) : (
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Image
            src={Loading}
            alt="Animação da Pokébola carregando"
            mixBlendMode={"lighten"}
            w={"50%"}
          ></Image>
        </Flex>
      )}
    </>
  );
};
