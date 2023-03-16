import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Image, Box, Heading, Text, Button } from "@chakra-ui/react";
import { goToHomePage } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import EquipeRocket from "../assets/imgs/Equipe-Rocket-Pokemon.png";
import Pokebola from "../assets/imgs/Pokebola_Fundo.png";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Box
        textAlign="center"
        py={10}
        px={6}
        display="flex"
        alignItems={"center"}
        flexDirection="column"
        backgroundImage={Pokebola}
        backgroundRepeat={"no-repeat"}
        backgroundSize="cover"
        backgroundPosition={"center"}
      >
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bg="pokedex.blue.100"
          backgroundClip="text"
        >
          404
        </Heading>
        <Text fontSize="xl" mt={3} mb={2} fontWeight="700">
          Page Not Found
        </Text>
        <Text textAlign={"center"} mb={6}>
          Ops! Essa página foi levada pela Equipe Rocket!
        </Text>
        <Button variant={"notFound"} onClick={() => goToHomePage(navigate)}>
          Volte para o início
        </Button>

        <Image
          src={EquipeRocket}
          alt="Equipe Rocket do desenho Pokémon."
          objectFit={"contain"}
          h={"xs"}
          mt={"2rem"}
        />
      </Box>

      <Footer />
    </div>
  );
};
