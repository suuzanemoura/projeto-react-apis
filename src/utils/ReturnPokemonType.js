import bug from "../assets/imgs/PokemonCard/bug.svg";
import dark from "../assets/imgs/PokemonCard/dark.svg";
import dragon from "../assets/imgs/PokemonCard/dragon.svg";
import electric from "../assets/imgs/PokemonCard/electric.svg";
import fairy from "../assets/imgs/PokemonCard/fairy.svg";
import fighting from "../assets/imgs/PokemonCard/fighting.svg";
import fire from "../assets/imgs/PokemonCard/fire.svg";
import flying from "../assets/imgs/PokemonCard/flying.svg";
import ghost from "../assets/imgs/PokemonCard/ghost.svg";
import grass from "../assets/imgs/PokemonCard/grass.svg";
import ground from "../assets/imgs/PokemonCard/ground.svg";
import ice from "../assets/imgs/PokemonCard/ice.svg";
import normal from "../assets/imgs/PokemonCard/normal.svg";
import poison from "../assets/imgs/PokemonCard/poison.svg";
import psychic from "../assets/imgs/PokemonCard/psychic.svg";
import rock from "../assets/imgs/PokemonCard/rock.svg";
import steel from "../assets/imgs/PokemonCard/steel.svg";
import water from "../assets/imgs/PokemonCard/water.svg";

export const getTypes = (type) => {
  switch (type) {
    case "bug":
      return bug;
    case "dark":
      return dark;
    case "dragon":
      return dragon;
    case "electric":
      return electric;
    case "fairy":
      return fairy;
    case "fighting":
      return fighting;
    case "fire":
      return fire;
    case "flying":
      return flying;
    case "ghost":
      return ghost;
    case "grass":
      return grass;
    case "ground":
      return ground;
    case "ice":
      return ice;
    case "normal":
      return normal;
    case "poison":
      return poison;
    case "psychic":
      return psychic;
    case "rock":
      return rock;
    case "steel":
      return steel;
    case "water":
      return water;
    default:
      return normal;
  }
};
