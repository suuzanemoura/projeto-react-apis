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
  useDisclosure,
} from "@chakra-ui/react";

import useRequestData from "../hooks/useRequestData";
import Loading from "../assets/imgs/loading_pokeball.gif";
import Pokebola from "../assets/imgs/PokemonCard/Pokebola_Fundo.png";
import { getColors } from "../utils/ReturnCardColor";
import { getTypes } from "../utils/ReturnPokemonType";
import { useNavigate } from "react-router-dom";
import { goToPokemonDetailsPage } from "../routes/coordinator";
import { PokemonModal } from "./Modal";
import { GlobalContext } from "../contexts/GlobalContext";
import { useContext } from "react";

export const PokemonCard = ({
  pokemonUrl,
  addToPokedex,
  removeFromPokedex,
}) => {
  const [pokemon, isLoading, loaded, error] = useRequestData(
    [],
    `${pokemonUrl}`
  );

  const navigate = useNavigate();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { pokedex } = useContext(GlobalContext);

  const addModal = () => {
    onOpen();
    setTimeout(() => {
      addToPokedex({
        id: pokemon.id,
        name: pokemon.name,
      });
      onClose();
    }, 1500);
  };

  const deleteModal = () => {
    onOpen();
    setTimeout(() => {
      removeFromPokedex(pokemon.name);
      onClose();
    }, 1500);
  };

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
          w={{ base: "16rem", sm: "18rem", "2sm": "20.5rem", md: "27.5rem" }}
          h={"13.125rem"}
          borderRadius={"1rem"}
          backgroundImage={Pokebola}
          backgroundRepeat={"no-repeat"}
          backgroundPosition={"top right"}
          backgroundSize={{
            base: "10rem",
            "2sm": "11rem",
            md: "contain",
          }}
          gap={pokemon.name.length > 15 ? "2.6rem" : "2rem"}
          backgroundColor={getColors(pokemon.types[0].type.name)}
          mt={{ base: "4rem", "2sm": "2.5rem" }}
        >
          <Box px={"1.5rem"} pt={"1.5rem"}>
            <Text
              fontWeight={"700"}
              fontSize={"1rem"}
              fontFamily={"'Inter', sans-serif"}
            >
              #{pokemon.id < 10 ? `0${pokemon.id}` : pokemon.id}
            </Text>
            <Heading
              as="h1"
              fontSize={
                pokemon.name.length > 15
                  ? { base: "1.2rem", md: "1.5rem" }
                  : { base: "1.5rem", md: "2rem" }
              }
              fontFamily={"'Inter', sans-serif"}
              fontWeight={"700"}
              textTransform="capitalize"
            >
              {pokemon.name.replace("-", " ")}
            </Heading>
            <Image
              src={
                pokemon["sprites"]["other"]["official-artwork"]["front_default"]
              }
              alt={`Imagem do Pokémon ${pokemon.name}`}
              w={{ base: "8rem", md: "10rem", xl: "12.063rem" }}
              position={"absolute"}
              right={{
                base: 0,
                "2sm": "0.75rem",
                md: "1.2rem",
                xl: "0.3rem",
              }}
              top={{ base: "-5rem", "2sm": "-3.5rem" }}
            />
            <HStack mt={"0.4rem"}>
              {pokemon.types.map((type) => {
                return (
                  <Image
                    key={type.type.name}
                    src={getTypes(type.type.name)}
                    alt={`Imagem do tipo do Pokemon: tipo de ${type.type.name}`}
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
            {pokedex.find(
              (pokemonInPokedex) => pokemon.name === pokemonInPokedex.name
            ) ? (
              <>
                <Button variant={"delete"} onClick={deleteModal}>
                  Excluir
                </Button>
                <PokemonModal
                  isOpen={isOpen}
                  onOpen={onOpen}
                  onClose={onClose}
                  title={"Oh, no!"}
                  body={"O Pokémon foi removido da sua Pokedéx"}
                />
              </>
            ) : (
              <>
                <Button variant={"catch"} onClick={addModal}>
                  Capturar!
                </Button>
                <PokemonModal
                  isOpen={isOpen}
                  onOpen={onOpen}
                  onClose={onClose}
                  title={"Gotcha!"}
                  body={"O Pokémon foi adicionado a sua Pokédex"}
                />
              </>
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
