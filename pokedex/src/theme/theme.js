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
      yellow: {
        100: "#ffc400",
        200: "#ffde69",
      },
      orange: {
        100: "#ff7c2d",
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
            base: "8rem",
            sm: "9.5rem",
            md: "12rem",
            lg: "14rem",
            xl: "18rem",
          },
          h: {
            base: "2rem",
            sm: "3.5rem",
            md: "4.625rem",
          },
        },
      },
      variants: {
        default: {
          fontSize: {
            base: "md",
            sm: "md",
            md: "2xl",
            lg: "2xl",
            xl: "2xl",
          },
          bg: "pokedex.blue.100",
          _hover: {
            bg: "pokedex.blue.200",
          },
          _active: {
            bg: "pokedex.blue.300",
          },
        },
        link: {
          fontSize: {
            base: "sm",
            md: "xl",
            lg: "2xl",
          },
          color: "black",
          textDecoration: "underline",
          _hover: {
            color: "pokedex.blue.300",
          },
          _active: {
            color: "pokedex.blue.200",
          },
        },
        addPokedex: {
          fontSize: {
            base: "xs",
            md: "sm",
            lg: "md",
          },
          w: {
            base: "10rem",
            xl: "14.125rem",
          },
          h: {
            base: "2rem",
            sm: "3rem",
            xl: "3.563rem",
          },
          fontWeight: "400",
          bg: "pokedex.blue.100",
          _hover: {
            bg: "pokedex.blue.200",
          },
          _active: {
            bg: "pokedexblue.300",
          },
        },
        delPokedex: {
          fontSize: {
            base: "xs",
            md: "sm",
            lg: "md",
          },
          w: {
            base: "10rem",
            xl: "14.125rem",
          },
          h: {
            base: "2rem",
            sm: "3rem",
            xl: "3.563rem",
          },
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
          w: { base: "7rem", md: "9.125rem", lg: "9.125rem", xl: "9.125rem" },
          h: "2.375rem",
          bg: "white",
          color: "black",
          _hover: {
            transform: "scale(1.2) translateY(-5px) translateX(-10px)",
            boxShadow: "2px 2px 20px 1px rgba(0, 0, 0, 0.1)",
          },
          _active: {
            bg: "pokedex.yellow.100",
          },
        },
        delete: {
          fontSize: "md",
          fontWeight: "400",
          w: { base: "7rem", md: "9.125rem", lg: "9.125rem", xl: "9.125rem" },
          h: "2.375rem",
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
            transform: "scale(1.2) translateX(5px)",
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
    Progress: {
      baseStyle: {
        track: { bg: "transparent" },
        filledTrack: {
          bg: "pokedex.orange.100",
        },
      },
      variants: {
        orange: {
          filledTrack: {
            bg: "pokedex.orange.100",
          },
        },
        yellow: {
          filledTrack: {
            bg: "pokedex.yellow.200",
          },
        },
        blue: {
          filledTrack: {
            bg: "pokedex.blue.300",
          },
        },
      },
    },
  },
});

export default theme;
