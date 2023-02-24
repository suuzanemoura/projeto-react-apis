import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { PokedexPage } from "../pages/PokedexPage";
import { PokemonDetailsPage } from "../pages/PokemonDetailsPage";
import { ErrorPage } from "../pages/ErrorPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="page/:pageNumber" element={<HomePage />} />
        <Route path="pokedex" element={<PokedexPage />} />
        <Route
          path="pokemon/:pokemon"
          element={<PokemonDetailsPage></PokemonDetailsPage>}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
