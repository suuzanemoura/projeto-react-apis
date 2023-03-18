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

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <Box display="flex" justifyContent="center" gridColumn={2}>
              <Image
                src={Logo}
                alt="Logo do Pokémon"
                minW={"12rem"}
                w={{ base: "12rem", sm: "14rem", lg: "fit-content" }}
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
              order={{ base: 2, lg: 1 }}
            >
              <Button variant="link" onClick={() => goToHomePage(navigate)}>
                <ChevronLeftIcon minW={15} minH={15} /> Voltar ao início
              </Button>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              gridColumn={2}
              order={{ base: 1, lg: 2 }}
            >
              <Image
                src={Logo}
                alt="Logo do Pokémon"
                minW={"12rem"}
                w={{ base: "12rem", sm: "14rem", lg: "fit-content" }}
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
              order={{ base: 3, lg: 1 }}
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
                minW={"12rem"}
                w={{ base: "12rem", sm: "14rem", lg: "fit-content" }}
              />
            </Box>
          </>
        );
      case `/pokedex/${params.pokedexPage}`:
        return (
          <>
            <Box
              display="flex"
              justifyContent="start"
              gridColumn={1}
              order={{ base: 3, lg: 1 }}
            >
              <Button variant="link" onClick={() => navigate(-1)}>
                <ChevronLeftIcon minW={15} minH={15} /> Página anterior
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
                minW={"12rem"}
                w={{ base: "12rem", sm: "14rem", lg: "fit-content" }}
              />
            </Box>
          </>
        );
      case `/pokemon/${params.pokemon}`:
        return (
          <>
            <Box
              display="flex"
              justifyContent="start"
              gridColumn={1}
              order={{ base: 2, lg: 1 }}
            >
              <Button variant="link" onClick={() => goToHomePage(navigate)}>
                <ChevronLeftIcon minW={15} minH={15} /> Todos Pokémons
              </Button>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              gridColumn={2}
              order={{ base: 1, lg: 2 }}
            >
              <Image
                src={Logo}
                alt="Logo do Pokémon"
                minW={"12rem"}
                w={{ base: "12rem", sm: "14rem", lg: "fit-content" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" gridColumn={3} order={3}>
              {pokedex.find(
                (pokemonInPokedex) => pokemon.name === pokemonInPokedex.name
              ) ? (
                <>
                  <Button variant="delPokedex" onClick={deleteModal}>
                    Excluir da Pokédex
                  </Button>
                  <PokemonModal
                    isOpen={isOpen}
                    onClose={onClose}
                    title={"Oh, no!"}
                    body={"O Pokémon foi removido da sua Pokedéx"}
                  />
                </>
              ) : (
                <>
                  <Button variant="addPokedex" onClick={addModal}>
                    Adicionar na Pokédex
                  </Button>
                  <PokemonModal
                    isOpen={isOpen}
                    onClose={onClose}
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
      as="header"
      bg="white"
      px={{ md: "1rem", lg: "2rem", "2xl": "3rem", "4xl": "5rem" }}
      py={"3rem"}
      display={{ base: "flex", lg: "grid" }}
      gridTemplateColumns="repeat(3, 1fr)"
      alignItems={"center"}
      justifyContent={["center", "space-between"]}
      flexWrap={"wrap"}
      gridColumnGap={"1rem"}
      flexDirection={"column"}
      rowGap={"1rem"}
    >
      {renderHeader()}
    </Box>
  );
};
