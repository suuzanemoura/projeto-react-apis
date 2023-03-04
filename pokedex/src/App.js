import { Router } from "./routes/Router";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import theme from "./theme/theme";
import { useState } from "react";

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Router />
    </ChakraProvider>
  );
}

export default App;
