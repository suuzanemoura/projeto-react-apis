import { Router } from "./routes/Router";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import theme from "./theme/theme";
import { GlobalContextProvider } from "./contexts/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <ChakraProvider resetCSS theme={theme}>
        <Router />
      </ChakraProvider>
    </GlobalContextProvider>
  );
}

export default App;
