import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "320px",
  "2sm": "360px",
  md: "480px",
  lg: "768px",
  xl: "980px",
  "2xl": "1280px",
  "3xl": "1440px",
  "4xl": "1600px",
  "5xl": "1920px",
};

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
      variants: {
        default: {
          fontSize: {
            base: "md",
            sm: "md",
            md: "2xl",
          },
          w: {
            base: "9rem",
            md: "10.5rem",
            lg: "12rem",
            xl: "15rem",
            "2xl": "18rem",
          },
          h: {
            base: "3rem",
            md: "3.625rem",
            lg: "4.625rem",
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
            base: "md",
            md: "xl",
            xl: "2xl",
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
            lg: "md",
          },
          w: {
            base: "10rem",
            sm: "12rem",
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
            lg: "md",
          },
          w: {
            base: "10rem",
            sm: "12rem",
            xl: "14.125rem",
          },
          h: {
            base: "2rem",
            sm: "3rem",
            lg: "3.563rem",
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
          w: {
            base: "6rem",
            "2sm": "7.5rem",
            md: "9.125rem",
          },
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
          w: {
            base: "6rem",
            "2sm": "7.5rem",
            md: "9.125rem",
          },
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
  breakpoints,
});

export default theme;
