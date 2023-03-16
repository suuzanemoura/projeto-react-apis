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
            <Box display="flex" justifyContent="center" gridColumn={2}>
              <Image src={Logo} alt="Logo do Pokémon" minW={"8rem"} />
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
            <Box display="flex" justifyContent="start" gridColumn={1}>
              <Button variant="link" onClick={() => goToHomePage(navigate)}>
                <ChevronLeftIcon w={25} h={25} /> Voltar para início
              </Button>
            </Box>
            <Box display="flex" justifyContent="center" gridColumn={2}>
              <Image src={Logo} alt="Logo do Pokémon" minW={"8rem"} />
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
      case "/pokedex":
        return (
          <>
            <Box display="flex" justifyContent="start" gridColumn={1}>
              <Button variant="link" onClick={() => goToHomePage(navigate)}>
                <ChevronLeftIcon w={25} h={25} /> Todos Pokémons
              </Button>
            </Box>
            <Box display="flex" justifyContent="center" gridColumn={2}>
              <Image src={Logo} alt="Logo do Pokémon" minW={"8rem"} />
            </Box>
          </>
        );
      case `/pokedex/${params.pokedexPage}`:
        return (
          <>
            <Box display="flex" justifyContent="start" gridColumn={1}>
              <Button variant="link" onClick={() => goToHomePage(navigate)}>
                <ChevronLeftIcon w={25} h={25} /> Todos Pokémons
              </Button>
            </Box>
            <Box display="flex" justifyContent="center" gridColumn={2}>
              <Image src={Logo} alt="Logo do Pokémon" minW={"8rem"} />
            </Box>
          </>
        );
      case `/pokemon/${params.pokemon}`:
        return (
          <>
            <Box display="flex" justifyContent="start" gridColumn={1}>
              <Button variant="link" onClick={() => navigate(-1)}>
                <ChevronLeftIcon w={25} h={25} /> Voltar
              </Button>
            </Box>
            <Box display="flex" justifyContent="center" gridColumn={2}>
              <Image src={Logo} alt="Logo do Pokémon" minW={"8rem"} />
            </Box>
            <Box display="flex" justifyContent="end" gridColumn={3}>
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
          <Box display="flex" justifyContent="center" gridColumn={2}>
            <Image src={Logo} alt="Logo do Pokémon" minW={"8rem"} />
          </Box>
        );
    }
  };

  return (
    <Box
      as="nav"
      bg="white"
      h="10rem"
      px="3rem"
      display="grid"
      gridTemplateColumns="repeat(3, 1fr)"
      alignItems="center"
      justifyContent="space-between"
    >
      {renderHeader()}
    </Box>
  );
};
