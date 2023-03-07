export const getColors = (type) => {
  switch (type) {
    case "bug":
      return "#76A866";
    case "dark":
      return "#70657B";
    case "dragon":
      return "#004170";
    case "electric":
      return "#E7BF0D";
    case "fairy":
      return "#EA85E4";
    case "fighting":
      return "#D96D8C";
    case "fire":
      return "#EAAB7D";
    case "flying":
      return "#6892B0";
    case "ghost":
      return "#7587BD";
    case "grass":
      return "#729F92";
    case "ground":
      return "#E7A888";
    case "ice":
      return "#59C5B4";
    case "normal":
      return "#BF9762";
    case "poison":
      return "#B978BA";
    case "psychic":
      return "#F88C90";
    case "rock":
      return "#C7B78B";
    case "steel":
      return "#ADADAD";
    case "water":
      return "#71C3FF";
    default:
      return "#BF9762";
  }
};
