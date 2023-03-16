import { Box, Button, Image, useDisclosure } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Logo from "../assets/imgs/Pokemon_Logo.svg";
import { goToHomePage, goToPokedexPage } from "../routes/coordinator";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { PokemonModal } from "./Modal";

export const Header = ({ pokemon }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const { pokedex, addToPokedex, removeFromPokedex } =
    useContext(GlobalContext);

  const { isOpen, onClose, onOpen } = useDisclosure();
  const addModal = () => {
    onClose();
    addToPokedex(pokemon.name);
  };

  const deleteModal = () => {
    onClose();
    removeFromPokedex(pokemon.name);
  };

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <Box gridColumn={1} minW={"4.5rem"} />
            <Box display="flex" justifyContent="center" gridColumn={2}>
              <Image
                src={Logo}
                alt="Logo do Pokémon"
                minW={"8rem"}
                w={["10rem", "fit-content"]}
              />
            </Box>
            <Box display="flex" justifyContent="end" gridColumn={3}>
              <Button
                onClick={() => {
                  goToPokedexPage(navigate);
                }}
              >
                Pokédex
              </Button>
            </Box>
          </>
        );
      case `/page/${params.pageNumber}`:
        return (
          <>
            <Box
              display="flex"
              justifyContent="start"
              gridColumn={1}
              order={[2, 1]}
            >
              <Button variant="link" onClick={() => goToHomePage(navigate)}>
                <ChevronLeftIcon minW={15} minH={15} /> Voltar ao início
              </Button>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              gridColumn={2}
              order={[1, 2]}
            >
              <Image
                src={Logo}
                alt="Logo do Pokémon"
                minW={"8rem"}
                w={["10rem", "fit-content"]}
              />
            </Box>
            <Box display="flex" justifyContent="end" gridColumn={3} order={3}>
              <Button
                onClick={() => {
                  goToPokedexPage(navigate);
                }}
              >
                Pokédex
              </Button>
            </Box>
          </>
        );
      case "/pokedex":
        return (
          <>
            <Box
              display="flex"
              justifyContent="start"
              gridColumn={1}
              order={[3, 1]}
            >
              <Button variant="link" onClick={() => goToHomePage(navigate)}>
                <ChevronLeftIcon minW={15} minH={15} /> Todos Pokémons
              </Button>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              gridColumn={2}
              order={2}
            >
              <Image
                src={Logo}
                alt="Logo do Pokémon"
                minW={"8rem"}
                w={["10rem", "fit-content"]}
              />
            </Box>
            <Box gridColumn={3} minW={"4.5rem"} order={[1, 3]} />
          </>
        );
      case `/pokedex/${params.pokedexPage}`:
        return (
          <>
            <Box
              display="flex"
              justifyContent="start"
              gridColumn={1}
              order={[3, 1]}
            >
              <Button variant="link" onClick={() => goToHomePage(navigate)}>
                <ChevronLeftIcon minW={15} minH={15} /> Todos Pokémons
              </Button>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              gridColumn={2}
              order={2}
            >
              <Image
                src={Logo}
                alt="Logo do Pokémon"
                minW={"8rem"}
                w={["10rem", "fit-content"]}
              />
            </Box>
            <Box gridColumn={3} minW={"4.5rem"} order={[1, 3]} />
          </>
        );
      case `/pokemon/${params.pokemon}`:
        return (
          <>
            <Box
              display="flex"
              justifyContent="start"
              gridColumn={1}
              order={[2, 1]}
            >
              <Button variant="link" onClick={() => navigate(-1)}>
                <ChevronLeftIcon minW={15} minH={15} /> Página anterior
              </Button>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              gridColumn={2}
              order={[1, 2]}
            >
              <Image
                src={Logo}
                alt="Logo do Pokémon"
                minW={"8rem"}
                w={["10rem", "fit-content"]}
              />
            </Box>
            <Box display="flex" justifyContent="end" gridColumn={3} order={3}>
              {pokedex.find(
                (pokemonInPokedex) => pokemon.name === pokemonInPokedex
              ) ? (
                <>
                  <Button
                    variant="delPokedex"
                    onClick={() => {
                      onOpen();
                    }}
                  >
                    Excluir da Pokédex
                  </Button>
                  <PokemonModal
                    isOpen={isOpen}
                    onClose={deleteModal}
                    title={"Oh, no!"}
                    body={"O Pokémon foi removido da sua Pokedéx"}
                  />
                </>
              ) : (
                <>
                  <Button
                    variant="addPokedex"
                    onClick={() => {
                      onOpen();
                    }}
                  >
                    Adicionar na Pokédex
                  </Button>
                  <PokemonModal
                    isOpen={isOpen}
                    onClose={addModal}
                    title={"Gotcha!"}
                    body={"O Pokémon foi adicionado a sua Pokédex"}
                  />
                </>
              )}
            </Box>
          </>
        );
      default:
        return (
          <Box
            display="flex"
            justifyContent="center"
            alignItems={"center"}
            gridColumn={2}
          >
            <Image
              src={Logo}
              alt="Logo do Pokémon"
              minW={"12rem"}
              w={["12rem", "fit-content"]}
            />
          </Box>
        );
    }
  };

  return (
    <Box
      as="nav"
      bg="white"
      h="10rem"
      px={["1rem", "2rem", "3rem"]}
      display={["flex", "grid"]}
      gridTemplateColumns="repeat(auto-fit, minmax(50px, 1fr))"
      alignItems={"center"}
      justifyContent={["center", "space-between"]}
      flexWrap={"wrap"}
      gridColumnGap={"1rem"}
      flexDirection={"column"}
      rowGap={"0.5rem"}
    >
      {renderHeader()}
    </Box>
  );
};
