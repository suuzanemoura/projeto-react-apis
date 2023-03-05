import { Box, Button, Image } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Logo from "../assets/imgs/Pokemon_Logo.svg";
import { goToHomePage, goToPokedexPage } from "../routes/coordinator";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <Box
              w="18rem"
              h="4.625rem"
              fontSize="2xl"
              visibility="hidden"
              display="flex"
              justifyContent="start"
            ></Box>
            <Box display="flex" justifyContent="center">
              <Image src={Logo} alt="Logo do Pokémon" />
            </Box>
            <Box display="flex" justifyContent="end">
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
            <Box display="flex" justifyContent="start">
              <Button variant="link" onClick={() => goToHomePage(navigate)}>
                <ChevronLeftIcon w={25} h={25} /> Voltar para início
              </Button>
            </Box>
            <Box display="flex" justifyContent="center">
              <Image src={Logo} alt="Logo do Pokémon" />
            </Box>
            <Box display="flex" justifyContent="end">
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
            <Box display="flex" justifyContent="start">
              <Button variant="link" onClick={() => goToHomePage(navigate)}>
                <ChevronLeftIcon w={25} h={25} /> Todos Pokémons
              </Button>
            </Box>
            <Box display="flex" justifyContent="center">
              <Image src={Logo} alt="Logo do Pokémon" />
            </Box>
            <Box
              w="18rem"
              h="4.625rem"
              fontSize="2xl"
              visibility="hidden"
              display="flex"
              justifyContent="end"
            ></Box>
          </>
        );
      case `/pokemon/${params.pokemon}`:
        return (
          <>
            <Box display="flex" justifyContent="start">
              <Button variant="link" onClick={() => goToHomePage(navigate)}>
                <ChevronLeftIcon w={25} h={25} /> Todos Pokémons
              </Button>
            </Box>
            <Box display="flex" justifyContent="center">
              <Image src={Logo} alt="Logo do Pokémon" />
            </Box>
            <Box display="flex" justifyContent="end">
              <Button
                variant="addPokedex"
                onClick={() => {
                  goToPokedexPage(navigate);
                }}
              >
                Adicionar na Pokédex
              </Button>
            </Box>
          </>
        );
      default:
        return (
          <>
            <Box
              w="18rem"
              h="4.625rem"
              fontSize="2xl"
              visibility="hidden"
              display="flex"
              justifyContent="start"
            ></Box>
            <Box display="flex" justifyContent="center">
              <Image src={Logo} alt="Logo do Pokémon" />
            </Box>
            <Box
              w="18rem"
              h="4.625rem"
              fontSize="2xl"
              visibility="hidden"
              display="flex"
              justifyContent="end"
            ></Box>
          </>
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
