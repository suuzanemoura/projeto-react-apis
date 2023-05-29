import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { PokedexPage } from "../pages/PokedexPage";
import { PokemonDetailsPage } from "../pages/PokemonDetailsPage";
import { NotFoundPage } from "../pages/NotFoundPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="page/:pageNumber" element={<HomePage />} />
        <Route path="pokedex" element={<PokedexPage />} />
        <Route path="pokedex/:pokedexPage" element={<PokedexPage />} />
        <Route path="pokemon/:pokemon" element={<PokemonDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
