import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  colors: {
    pokedex: {
      blue: {
        100: "#33A4F5",
        200: "#0A81D6",
        300: "#075E9C",
      },
      red: {
        100: "#FF6262",
        200: "#FF3333",
        300: "#E00000",
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "#5E5E5E",
        color: "white",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "700",
      },
      sizes: {
        "1xs": {
          w: {
            base: "6rem",
            sm: "8rem",
            md: "12rem",
            lg: "14rem",
            xl: "18rem",
          },
          h: "4.625rem",
        },
        "2xs": {
          w: "13.75rem",
          h: "4.625rem",
        },
        "3xs": {
          w: "9.125rem",
          h: "2.375rem",
        },
      },
      variants: {
        default: {
          fontSize: "2xl",
          bg: "pokedex.blue.100",
          _hover: {
            bg: "pokedex.blue.200",
          },
          _active: {
            bg: "pokedex.blue.300",
          },
        },
        link: {
          fontSize: "2xl",
          color: "black",
          textDecoration: "underline",
          _hover: {
            color: "pokedex.bluedark",
          },
          _active: {
            color: "pokedex.bluedarker",
          },
        },
        addPokedex: {
          fontSize: "md",
          fontWeight: "400",
          size: "2xs",
          bg: "pokedex.blue.100",
          _hover: {
            bg: "pokedex.blue.200",
          },
          _active: {
            bg: "pokedexblue.300",
          },
        },
        delPokedex: {
          fontSize: "md",
          fontWeight: "400",
          size: "2xs",
          bg: "pokedex.red.100",
          _hover: {
            bg: "pokedex.red.200",
          },
          _active: {
            bg: "pokedex.red.300",
          },
        },
        catch: {
          fontSize: "md",
          fontWeight: "400",
          w: "9.125rem",
          h: "2.375rem",
          bg: "white",
          color: "black",
          _hover: {
            bg: "pokedex.blue.100",
          },
          _active: {
            bg: "pokedex.blue.200",
          },
        },
        delete: {
          fontSize: "md",
          fontWeight: "400",
          size: "3xs",
          bg: "pokedex.red.100",
          _hover: {
            bg: "pokedex.red.200",
          },
          _active: {
            bg: "pokedex.red.300",
          },
        },
        details: {
          fontSize: "md",
          fontWeight: "700",
          w: "4.625rem",
          h: "1.5rem",
          textDecoration: "underline",
          _hover: {
            color: "pokedex.blue.200",
          },
          _active: {
            color: "pokedex.blue.300",
          },
        },
        notFound: {
          fontSize: "md",
          w: "12rem",
          h: "3rem",
          bg: "pokedex.blue.100",
          _hover: {
            bg: "pokedex.blue.200",
          },
          _active: {
            bg: "pokedex.blue.300",
          },
        },
      },
      defaultProps: {
        size: "1xs",
        variant: "default",
      },
    },
  },
});

export default theme;
