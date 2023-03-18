import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Card,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { BASE_URL } from "../constants/constants";
import useRequestData from "../hooks/useRequestData";

import Loading from "../assets/imgs/loading_pokeball.gif";
import Pokebola from "../assets/imgs/Pokebola_DetailsPage_Fundo.png";
import PokebolaCard from "../assets/imgs/Pokebola_DetailsPage_FundoCard.png";
import { getColors } from "../utils/ReturnCardColor";
import { getTypes } from "../utils/ReturnPokemonType";
import { BaseStatBar } from "../components/BaseStatBar";

export const PokemonDetailsPage = () => {
  const params = useParams();
  const [pokemon, isLoading, loaded, error] = useRequestData(
    [],
    `${BASE_URL}${params.pokemon}`
  );

  const getMoves = () => {
    let moves = [];
    if (pokemon.moves.length > 5) {
      for (let i = 0; i < 6; i++) {
        moves.push(pokemon.moves[i].move.name.replace("-", " "));
      }
    } else {
      for (let i = 0; i < pokemon.moves.length; i++) {
        moves.push(pokemon.moves[i].move.name.replace("-", " "));
      }
    }
    return moves;
  };

  return (
    <Flex direction="column" minH={"100vh"}>
      <Header pokemon={pokemon} />
      <Box
        as="main"
        flex="1"
        py={{ base: "3rem", lg: "5.5rem" }}
        px={"2rem"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        backgroundImage={Pokebola}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
        backgroundSize={"cover"}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Heading
            as="h1"
            size={{
              base: "lg",
              md: "xl",
            }}
            mb={"3rem"}
            px={{ base: "1rem", md: "2.75rem" }}
          >
            Detalhes
          </Heading>
          {error ? (
            <Flex align="top" justify="center" w="100%">
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
            <Flex alignItems={"center"} justifyContent={"center"} w={"100%"}>
              <Image
                src={Loading}
                alt="Animação da Pokébola carregando"
                mixBlendMode={"lighten"}
                w={"30%"}
              ></Image>
            </Flex>
          ) : loaded ? (
            <Card
              minW={{
                base: "16rem",
                md: "26rem",
                xl: "56rem",
                "2xl": "71rem",
                "3xl": "86rem",
              }}
              h={{ base: "fit-content", "3xl": "41.5rem" }}
              borderRadius={"2.375rem"}
              backgroundImage={PokebolaCard}
              backgroundRepeat={"no-repeat"}
              backgroundPosition={{ base: "top right", "3xl": "right" }}
              backgroundSize={{
                base: "10rem",
                md: "15rem",
                lg: "20rem",
                xl: "28rem",
                "3xl": "contain",
              }}
              backgroundColor={getColors(pokemon.types[0].type.name)}
              display={"grid"}
              gridTemplateColumns={{ base: "1fr", "3xl": "repeat(2, 1fr)" }}
              gridTemplateRows={{ base: "", "3xl": "1fr" }}
              px={{ base: "1rem", md: "2.75rem" }}
              py={"1.625rem"}
              gridColumnGap={"4.25rem"}
              gridRowGap={"2rem"}
              mb={"2rem"}
              position={"relative"}
            >
              <Image
                src={
                  pokemon["sprites"]["other"]["official-artwork"][
                    "front_default"
                  ]
                }
                alt={`Imagem do Pokémon ${pokemon.name}`}
                w={{ base: "6rem", md: "10rem", lg: "14rem", xl: "16.875rem" }}
                position={"absolute"}
                right={{ base: "1rem", xl: "2.3rem" }}
                top={{ base: "-3rem", md: "-5rem", lg: "-7rem", xl: "-8.5rem" }}
              />
              <Box
                gridColumn={{ base: 1, "3xl": 2 }}
                gridRow={{ base: 1, "3xl": 1 }}
                display={"grid"}
                rowGap={{ base: "2rem", "3xl": "2.875rem" }}
                columnGap={"1.313rem"}
                color={"white"}
              >
                <Box
                  gridColumn={1}
                  gridRow={1}
                  px={{ base: "0.5rem", md: "0" }}
                >
                  <Text
                    fontWeight={"700"}
                    fontSize={"1rem"}
                    fontFamily={"'Inter', sans-serif"}
                  >
                    #{pokemon.id < 10 ? `0${pokemon.id}` : pokemon.id}
                  </Text>
                  <Heading
                    as="h1"
                    fontSize={{ base: "2rem", lg: "2.8rem", xl: "3rem" }}
                    fontFamily={"'Inter', sans-serif"}
                    fontWeight={"700"}
                    textTransform="capitalize"
                  >
                    {pokemon.name.replace("-", " ")}
                  </Heading>
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
                  gridColumn={1}
                  gridRow={2}
                  bg={"white"}
                  borderRadius={"1rem"}
                  color={"black"}
                  p={"1.125rem"}
                  w={{ base: "100%", "3xl": "18.25rem" }}
                >
                  <Heading
                    as="h2"
                    fontSize={"2xl"}
                    fontWeight={"800"}
                    fontFamily={"'Inter', sans-serif"}
                    mb={"1.25rem"}
                  >
                    Moves:
                  </Heading>
                  <List
                    display={"flex"}
                    flexDirection={{ base: "row", "3xl": "column" }}
                    justifyContent={"center"}
                    gap={"1rem"}
                    textTransform={"capitalize"}
                    fontSize={"14px"}
                    flexWrap={"wrap"}
                  >
                    {getMoves().map((move) => {
                      return (
                        <ListItem
                          key={move}
                          bgColor={"#ECECEC"}
                          p={"0.625rem"}
                          borderRadius={"0.75rem"}
                          border={"1px dashed rgba(0, 0, 0, 0.14)"}
                          borderWidth={"0.1rem"}
                          w={"max-content"}
                        >
                          {move}
                        </ListItem>
                      );
                    })}
                  </List>
                </Box>
              </Box>
              <Box
                gridColumn={1}
                gridRow={{ base: 2, "3xl": 1 }}
                display={"grid"}
                gridTemplateColumns={{
                  base: "1fr 1fr",
                  lg: "1fr 2fr",
                  "3xl": "17.625rem 21.438rem",
                }}
                gridTemplateRows={{
                  base: "1fr 3fr",
                  md: "1fr 2fr",
                  lg: "repeat(2, 1fr)",
                }}
                rowGap={{ base: "2rem", "3xl": "2.938rem" }}
                columnGap={{ base: "2rem", "3xl": "2.125rem" }}
              >
                <Box
                  gridColumn={1}
                  gridRow={1}
                  bg={"white"}
                  borderRadius={"1rem"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  fontSize={"0.5rem"}
                >
                  <Image
                    src={
                      pokemon["sprites"]["versions"]["generation-v"][
                        "black-white"
                      ]["animated"]["front_default"] === null
                        ? pokemon["sprites"]["other"]["home"]["front_default"]
                        : pokemon["sprites"]["versions"]["generation-v"][
                            "black-white"
                          ]["animated"]["front_default"]
                    }
                    alt={
                      pokemon["sprites"]["versions"]["generation-v"][
                        "black-white"
                      ]["animated"]["front_default"] === null
                        ? `Arte frontal do Pokémon ${pokemon.name}`
                        : `Gif das costas do Pokémon ${pokemon.name}`
                    }
                    w={
                      pokemon["sprites"]["versions"]["generation-v"][
                        "black-white"
                      ]["animated"]["front_default"] === null
                        ? {
                            base: "4rem",
                            md: "8rem",
                            "3xl": "12rem",
                          }
                        : { base: "3rem", md: "4rem", lg: "6.25rem" }
                    }
                  />
                </Box>
                <Box
                  gridColumn={{ base: 2, lg: 1 }}
                  gridRow={{ base: 1, lg: 2 }}
                  bg={"white"}
                  borderRadius={"1rem"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  fontSize={"0.5rem"}
                >
                  <Image
                    src={
                      pokemon["sprites"]["versions"]["generation-v"][
                        "black-white"
                      ]["animated"]["back_default"] === null
                        ? pokemon["sprites"]["other"]["home"]["front_shiny"]
                        : pokemon["sprites"]["versions"]["generation-v"][
                            "black-white"
                          ]["animated"]["back_default"]
                    }
                    alt={
                      pokemon["sprites"]["versions"]["generation-v"][
                        "black-white"
                      ]["animated"]["back_default"] === null
                        ? `Arte frontal shiny do Pokémon ${pokemon.name}`
                        : `Gif das costas do Pokémon ${pokemon.name}`
                    }
                    w={
                      pokemon["sprites"]["versions"]["generation-v"][
                        "black-white"
                      ]["animated"]["back_default"] === null
                        ? {
                            base: "4rem",
                            md: "8rem",
                            "3xl": "12rem",
                          }
                        : { base: "3rem", md: "4rem", lg: "6.25rem" }
                    }
                  />
                </Box>
                <Box
                  gridColumn={{ base: "1 / span 2", lg: 2 }}
                  gridRow={{ base: 2, lg: "1 / span 2" }}
                  bg={"white"}
                  borderRadius={"1rem"}
                  p={"1.5rem"}
                >
                  <Heading
                    as="h2"
                    fontSize={"2xl"}
                    fontWeight={"800"}
                    fontFamily={"'Inter', sans-serif"}
                    mb={"1.25rem"}
                  >
                    Base stats
                  </Heading>
                  <Grid
                    w={"full"}
                    templateRows={"repeat(8, 1fr)"}
                    fontFamily={"'Inter', sans-serif"}
                  >
                    {pokemon.stats.map((stat) => {
                      return (
                        <BaseStatBar
                          key={stat.stat.name}
                          name={stat.stat.name}
                          value={stat.base_stat}
                        />
                      );
                    })}
                    <BaseStatBar name={"total"} stats={pokemon.stats} />
                  </Grid>
                </Box>
              </Box>
            </Card>
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
        </Box>
      </Box>
      <Footer />
    </Flex>
  );
};
