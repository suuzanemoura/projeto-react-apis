import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Card,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Progress,
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

export const PokemonDetailsPage = () => {
  const params = useParams();

  const [pokemon, isLoading, loaded, error] = useRequestData(
    [],
    `${BASE_URL}${params.pokemon}`
  );

  console.log(pokemon);

  return (
    <Flex direction="column" flex="1">
      <Header pokemon={pokemon} />
      <Box
        as="main"
        flex="1"
        py={"3.75rem"}
        px={"2rem"}
        justifyContent={"center"}
        display={"flex"}
        backgroundImage={Pokebola}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
        backgroundSize={"cover"}
        minH={"100vh"}
      >
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          gap={"1.5rem"}
          w={"86rem"}
          justifyContent={"left"}
        >
          <Heading as="h1" size="xl" mb={"2rem"} w={"full"} px={"2.75rem"}>
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
              w={"full"}
              borderRadius={"2.375rem"}
              backgroundImage={PokebolaCard}
              backgroundRepeat={"no-repeat"}
              backgroundPosition={"right"}
              backgroundSize={"contain"}
              gap={"2rem"}
              backgroundColor={getColors(pokemon.types[0].type.name)}
              display={"grid"}
              gridTemplateColumns={"repeat(2, 1fr)"}
              px={"2.75rem"}
              py={"1.625rem"}
              gridGap={"4.25rem"}
              mb={"2rem"}
            >
              <Box
                gridColumn={"1"}
                display={"grid"}
                gridTemplateColumns={"17.625rem 21.438rem"}
                gridTemplateRows={"repeat(2, 1fr)"}
                rowGap={"2.938rem"}
                columnGap={"2.125rem"}
              >
                <Box
                  gridColumn={1}
                  gridRow={1}
                  bg={"white"}
                  borderRadius={"1rem"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Image
                    src={
                      pokemon["sprites"]["versions"]["generation-v"][
                        "black-white"
                      ]["animated"]["front_default"]
                    }
                    alt={`Gif frontal do Pokémon ${pokemon.name}`}
                    w={"6.25rem"}
                  />
                </Box>
                <Box
                  gridColumn={1}
                  gridRow={2}
                  bg={"white"}
                  borderRadius={"1rem"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Image
                    src={
                      pokemon["sprites"]["versions"]["generation-v"][
                        "black-white"
                      ]["animated"]["back_default"]
                    }
                    alt={`Gif das costas do Pokémon ${pokemon.name}`}
                    w={"6.25rem"}
                  />
                </Box>
                <Box
                  gridColumn={2}
                  gridRow={"1 / span 2"}
                  bg={"white"}
                  borderRadius={"1rem"}
                  p={"1.5rem"}
                >
                  <Heading
                    as="h2"
                    fontSize={"2xl"}
                    fontWeight={"800"}
                    fontFamily={"Inter, sans serif"}
                    mb={"1.25rem"}
                  >
                    Base stats
                  </Heading>
                  <Grid
                    w={"full"}
                    templateRows={"repeat(8, 1fr)"}
                    fontFamily={"Inter, sans serif"}
                  >
                    <GridItem row={1}>
                      <Box
                        display={"grid"}
                        gridTemplateColumns={"3.75rem 2.125rem 1fr"}
                        alignItems={"center"}
                        w={"100%"}
                        h={"28px"}
                        gap={"1rem"}
                        borderTop={"1px solid RGBA(0, 0, 0, 0.06)"}
                      >
                        <Text
                          fontSize={"14px"}
                          col={1}
                          justifySelf={"right"}
                          color={"RGBA(0, 0, 0, 0.48)"}
                        >
                          HP
                        </Text>
                        <Text fontSize={"14px"} col={2} justifySelf={"center"}>
                          {pokemon.stats[0]["base_stat"]}
                        </Text>
                        <Box justifySelf={"left"} w={"100%"}>
                          <Progress
                            value={pokemon.stats[0]["base_stat"]}
                            borderRadius={"3px"}
                            col={3}
                          />
                        </Box>
                      </Box>
                    </GridItem>
                    <GridItem row={2}>
                      <Box
                        display={"grid"}
                        gridTemplateColumns={"3.75rem 2.125rem 1fr"}
                        alignItems={"center"}
                        w={"100%"}
                        h={"28px"}
                        gap={"1rem"}
                        borderTop={"1px solid RGBA(0, 0, 0, 0.06)"}
                      >
                        <Text
                          fontSize={"14px"}
                          col={1}
                          justifySelf={"right"}
                          color={"RGBA(0, 0, 0, 0.48)"}
                        >
                          Attack
                        </Text>
                        <Text fontSize={"14px"} col={2} justifySelf={"center"}>
                          {pokemon.stats[1]["base_stat"]}
                        </Text>
                        <Box justifySelf={"left"} w={"100%"}>
                          <Progress
                            value={pokemon.stats[1]["base_stat"]}
                            borderRadius={"3px"}
                            col={3}
                          />
                        </Box>
                      </Box>
                    </GridItem>
                    <GridItem row={3}>
                      <Box
                        display={"grid"}
                        gridTemplateColumns={"3.75rem 2.125rem 1fr"}
                        alignItems={"center"}
                        w={"100%"}
                        h={"28px"}
                        gap={"1rem"}
                        borderTop={"1px solid RGBA(0, 0, 0, 0.06)"}
                      >
                        <Text
                          fontSize={"14px"}
                          col={1}
                          justifySelf={"right"}
                          color={"RGBA(0, 0, 0, 0.48)"}
                        >
                          Defense
                        </Text>
                        <Text fontSize={"14px"} col={2} justifySelf={"center"}>
                          {pokemon.stats[2]["base_stat"]}
                        </Text>
                        <Box justifySelf={"left"} w={"100%"}>
                          <Progress
                            value={pokemon.stats[2]["base_stat"]}
                            borderRadius={"3px"}
                            col={3}
                          />
                        </Box>
                      </Box>
                    </GridItem>
                    <GridItem row={4}>
                      <Box
                        display={"grid"}
                        gridTemplateColumns={"3.75rem 2.125rem 1fr"}
                        alignItems={"center"}
                        w={"100%"}
                        h={"28px"}
                        gap={"1rem"}
                        borderTop={"1px solid RGBA(0, 0, 0, 0.06)"}
                      >
                        <Text
                          fontSize={"14px"}
                          col={1}
                          justifySelf={"right"}
                          color={"RGBA(0, 0, 0, 0.48)"}
                        >
                          Sp. Atk
                        </Text>
                        <Text fontSize={"14px"} col={2} justifySelf={"center"}>
                          {pokemon.stats[3]["base_stat"]}
                        </Text>
                        <Box justifySelf={"left"} w={"100%"}>
                          <Progress
                            value={pokemon.stats[3]["base_stat"]}
                            borderRadius={"3px"}
                            col={3}
                            variant={"yellow"}
                          />
                        </Box>
                      </Box>
                    </GridItem>
                    <GridItem row={5}>
                      <Box
                        display={"grid"}
                        gridTemplateColumns={"3.75rem 2.125rem 1fr"}
                        alignItems={"center"}
                        w={"100%"}
                        h={"28px"}
                        gap={"1rem"}
                        borderTop={"1px solid RGBA(0, 0, 0, 0.06)"}
                      >
                        <Text
                          fontSize={"14px"}
                          col={1}
                          justifySelf={"right"}
                          color={"RGBA(0, 0, 0, 0.48)"}
                        >
                          Sp. Def
                        </Text>
                        <Text fontSize={"14px"} col={2} justifySelf={"center"}>
                          {pokemon.stats[4]["base_stat"]}
                        </Text>
                        <Box justifySelf={"left"} w={"100%"}>
                          <Progress
                            value={pokemon.stats[4]["base_stat"]}
                            borderRadius={"3px"}
                            col={3}
                            variant={"yellow"}
                          />
                        </Box>
                      </Box>
                    </GridItem>
                    <GridItem row={6}>
                      <Box
                        display={"grid"}
                        gridTemplateColumns={"3.75rem 2.125rem 1fr"}
                        alignItems={"center"}
                        w={"100%"}
                        h={"28px"}
                        gap={"1rem"}
                        borderTop={"1px solid RGBA(0, 0, 0, 0.06)"}
                      >
                        <Text
                          fontSize={"14px"}
                          col={1}
                          justifySelf={"right"}
                          color={"RGBA(0, 0, 0, 0.48)"}
                        >
                          Speed
                        </Text>
                        <Text fontSize={"14px"} col={2} justifySelf={"center"}>
                          {pokemon.stats[5]["base_stat"]}
                        </Text>
                        <Box justifySelf={"left"} w={"100%"}>
                          <Progress
                            value={pokemon.stats[5]["base_stat"]}
                            borderRadius={"3px"}
                            col={3}
                          />
                        </Box>
                      </Box>
                    </GridItem>
                    <GridItem row={7}>
                      <Box
                        display={"grid"}
                        gridTemplateColumns={"3.75rem 2.125rem 1fr"}
                        alignItems={"center"}
                        w={"100%"}
                        h={"28px"}
                        gap={"1rem"}
                        borderY={"1px solid RGBA(0, 0, 0, 0.06)"}
                      >
                        <Text
                          fontSize={"14px"}
                          col={1}
                          justifySelf={"right"}
                          color={"RGBA(0, 0, 0, 0.48)"}
                        >
                          Total
                        </Text>
                        <Text
                          fontSize={"14px"}
                          col={2}
                          justifySelf={"center"}
                          fontWeight={"700"}
                        >
                          {pokemon.stats[0]["base_stat"] +
                            pokemon.stats[1]["base_stat"] +
                            pokemon.stats[2]["base_stat"] +
                            pokemon.stats[3]["base_stat"] +
                            pokemon.stats[4]["base_stat"] +
                            pokemon.stats[5]["base_stat"]}
                        </Text>
                      </Box>
                    </GridItem>
                  </Grid>
                </Box>
              </Box>
              <Box
                gridColumn={"2"}
                display={"grid"}
                gridTemplateColumns={"18.25rem 16.875rem"}
                gridTemplateRows={"1fr 28.313rem "}
                rowGap={"2.875rem"}
                columnGap={"1.313rem"}
                color={"white"}
              >
                <Box gridColumn={1} gridRow={1} borderRadius={"1rem"}>
                  <Text
                    fontWeight={"700"}
                    fontSize={"1rem"}
                    fontFamily={"Inter"}
                  >
                    #{pokemon.id < 10 ? `0${pokemon.id}` : pokemon.id}
                  </Text>
                  <Heading
                    as="h1"
                    fontSize={"44px"}
                    fontFamily={"Inter"}
                    fontWeight={"700"}
                    textTransform="capitalize"
                  >
                    {pokemon.name}
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
                >
                  <Heading
                    as="h2"
                    fontSize={"2xl"}
                    fontWeight={"800"}
                    fontFamily={"Inter, sans serif"}
                    mb={"1.25rem"}
                  >
                    Moves:
                  </Heading>
                  <List
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"1rem"}
                    textTransform={"capitalize"}
                    fontSize={"14px"}
                  >
                    <ListItem
                      bgColor={"#ECECEC"}
                      p={"0.625rem"}
                      borderRadius={"0.75rem"}
                      border={"1px dashed rgba(0, 0, 0, 0.14)"}
                      borderWidth={"0.1rem"}
                      w={"max-content"}
                    >
                      {pokemon.moves[0].move.name.replace("-", " ")}
                    </ListItem>
                    <ListItem
                      bgColor={"#ECECEC"}
                      p={"0.625rem"}
                      borderRadius={"0.75rem"}
                      border={"1px dashed rgba(0, 0, 0, 0.14)"}
                      borderWidth={"0.1rem"}
                      w={"max-content"}
                    >
                      {pokemon.moves[1].move.name.replace("-", " ")}
                    </ListItem>
                    <ListItem
                      bgColor={"#ECECEC"}
                      p={"0.625rem"}
                      borderRadius={"0.75rem"}
                      border={"1px dashed rgba(0, 0, 0, 0.14)"}
                      borderWidth={"0.1rem"}
                      w={"max-content"}
                    >
                      {pokemon.moves[2].move.name.replace("-", " ")}
                    </ListItem>
                    <ListItem
                      bgColor={"#ECECEC"}
                      p={"0.625rem"}
                      borderRadius={"0.75rem"}
                      border={"1px dashed rgba(0, 0, 0, 0.14)"}
                      borderWidth={"0.1rem"}
                      w={"max-content"}
                    >
                      {pokemon.moves[3].move.name.replace("-", " ")}
                    </ListItem>
                    <ListItem
                      bgColor={"#ECECEC"}
                      p={"0.625rem"}
                      borderRadius={"0.75rem"}
                      border={"1px dashed rgba(0, 0, 0, 0.14)"}
                      borderWidth={"0.1rem"}
                      w={"max-content"}
                    >
                      {pokemon.moves[4].move.name.replace("-", " ")}
                    </ListItem>
                    <ListItem
                      bgColor={"#ECECEC"}
                      p={"0.625rem"}
                      borderRadius={"0.75rem"}
                      border={"1px dashed rgba(0, 0, 0, 0.14)"}
                      borderWidth={"0.1rem"}
                      w={"max-content"}
                    >
                      {pokemon.moves[5].move.name.replace("-", " ")}
                    </ListItem>
                  </List>
                </Box>
                <Image
                  gridColumn={2}
                  gridRow={1}
                  src={
                    pokemon["sprites"]["other"]["official-artwork"][
                      "front_default"
                    ]
                  }
                  alt={`Imagem do Pokémon ${pokemon.name}`}
                  w={"16.875rem"}
                  position={"absolute"}
                  right={"2.25rem"}
                  bottom={"33.5rem"}
                />
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
