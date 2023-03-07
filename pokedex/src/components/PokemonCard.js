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

export const PokemonCard = ({ pokemon }) => {
  const [pkmn, isLoading, loaded, error] = useRequestData([], `${pokemon.url}`);

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
            height="200px"
            bg="pokedex.red.300"
            maxWidth="lg"
            borderRadius={"1rem"}
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
          backgroundColor={getColors(pkmn.types[0].type.name)}
          mt={"2rem"}
        >
          <Box px={"1.5rem"} pt={"1.5rem"}>
            <Text fontWeight={"700"} fontSize={"1rem"} fontFamily={"Inter"}>
              #{pkmn.id < 10 ? `0${pkmn.id}` : pkmn.id}
            </Text>
            <Heading
              as="h1"
              fontSize={"2rem"}
              fontFamily={"Inter"}
              fontWeight={"700"}
            >
              <Text textTransform="capitalize">{pkmn.name}</Text>
            </Heading>
            <Image
              src={
                pkmn["sprites"]["other"]["official-artwork"]["front_default"]
              }
              alt={`Imagem do Pokémon ${pkmn.name}`}
              w={"12.063rem"}
              position={"absolute"}
              right={"0.3rem"}
              bottom={"4.5rem"}
            />
            <HStack mt={"0.4rem"}>
              {pkmn.types.map((type) => {
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
            <Button variant={"details"}>Detalhes</Button>
            <Button variant={"catch"}>Capturar!</Button>
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
