export const goToHomePage = (navigate) => {
  navigate("/");
};

export const goToNumberPage = (navigate, pageNumber) => {
  navigate(`/page/${pageNumber}`);
};

export const goToPokedexPage = (navigate) => {
  navigate("/pokedex");
};

export const goToPokedexNumberPage = (navigate, pokedexPage) => {
  navigate(`/pokedex/${pokedexPage}`);
};

export const goToPokemonDetailsPage = (navigate, pokemon) => {
  navigate(`/pokemon/${pokemon}`);
};
