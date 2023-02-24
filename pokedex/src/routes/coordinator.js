export const goToHomePage = (navigate) => {
  navigate("/");
};

export const goToNextPage = (navigate, pageNumber) => {
  navigate(`/page/${pageNumber}`);
};

export const goToPokedex = (navigate) => {
  navigate("/pokedex");
};

export const goToPokemonDetails = (navigate, pokemon) => {
  navigate(`/pokemon/${pokemon}`);
};
