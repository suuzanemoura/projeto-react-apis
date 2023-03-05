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
import Poison from "../assets/imgs/PokemonCard/poison.png";
import Grass from "../assets/imgs/PokemonCard/grass.png";
import Loading from "../assets/imgs/loading_pokeball.gif";
import Pokebola from "../assets/imgs/PokemonCard/Pokebola_Fundo.png";

export const PokemonCard = ({ pokemon }) => {
  const [pkmn, isLoading, loaded, error] = useRequestData([], `${pokemon.url}`);

  const pkmName = (name) => {
    let pkm = name;
    pkm = pkm.charAt(0).toUpperCase() + pkm.slice(1);
    return pkm;
  };

  // console.log(pkm["sprites"]["other"]["official-artwork"]["front_default"]);

  return (
    <Box
      position={"relative"}
      display={"flex"}
      flexWrap={"wrap"}
      w={"27.5rem"}
      h={"13.125rem"}
      borderRadius={"1rem"}
      p={"1.5rem"}
      backgroundImage={Pokebola}
      backgroundRepeat={"no-repeat"}
      backgroundPosition={"right"}
      gap={"2rem"}
      backgroundColor={"#729F92"}
      mt={"2rem"}
    >
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
          <Image src={Loading} alt="Animação da Pokébola carregando"></Image>
        </Flex>
      ) : loaded ? (
        <>
          <Box>
            <Text>#{pkmn.id}</Text>
            <Heading as="h1" fontSize={"2rem"}>
              {pkmName(pkmn.name)}
            </Heading>
            <Image
              src={
                pkmn["sprites"]["other"]["official-artwork"]["front_default"]
              }
              alt="Imagem do pokemon Bulbasaur"
              w={"12.063rem"}
              position={"absolute"}
              right={"1rem"}
              bottom={"4.2rem"}
            />
            <HStack mt={"0.4rem"}>
              <Image
                src={Poison}
                alt="Imagem de Habilidade do Pokemon: Habilidade de Poison"
              />
              <Image
                src={Grass}
                alt="Imagem de Habilidade do Pokemon: Habilidade de Grass"
              />
            </HStack>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            w={"24.6rem"}
          >
            <Button variant={"details"}>Detalhes</Button>
            <Button variant={"catch"}>Capturar!</Button>
          </Box>
        </>
      ) : (
        <Text>Erro de requisição, tente novamente</Text>
      )}
    </Box>
  );
};
