import { Heading, Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";

export const PokemonModal = ({ isOpen, onClose, title, body }) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered borderRadius={"xl"}>
      <ModalOverlay backdropFilter="blur(5px)" />
      <ModalContent
        color={"black"}
        display={"flex"}
        alignItems={"center"}
        py={"4.3rem"}
        px={"3.2rem"}
        w={{ base: "15rem", "2sm": "20rem", md: "28rem" }}
      >
        <Heading as={"h1"} fontSize={{ base: "4xl", md: "5xl" }}>
          {title}
        </Heading>

        <Heading as="h4" fontSize={"md"} textAlign={"center"}>
          {body}
        </Heading>
      </ModalContent>
    </Modal>
  );
};
