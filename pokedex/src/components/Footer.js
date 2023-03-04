import { Box, Container } from "@chakra-ui/react";

export const Footer = (props) => {
  return (
    <Box as="footer" role="contentinfo" bg="bg-accent" {...props}>
      <Container>Footer</Container>
    </Box>
  );
};
