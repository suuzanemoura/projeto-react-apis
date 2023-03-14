import { Heading, Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";

export const PokemonModal = ({ isOpen, onClose, title, body }) => {
  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      isCentered
      size={"md"}
      borderRadius={"xl"}
    >
      <ModalOverlay />
      <ModalContent
        color={"black"}
        display={"flex"}
        alignItems={"center"}
        py={"4.3rem"}
        px={"3.2rem"}
      >
        <Heading as={"h1"} fontSize={"5xl"}>
          {title}
          {/* Gotcha! */}
        </Heading>

        <Heading as="h4" fontSize={"md"}>
          {body}
          {/* O Pokémon foi adicionado a sua Pokédex */}
        </Heading>
      </ModalContent>
    </Modal>
  );
};
