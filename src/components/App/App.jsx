import { Route, Routes } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { Home } from "../../pages/Home/Home";
import { MovieDetails } from "components/MovieDetails/MovieDetails";
import { Movies } from "pages/Movies/Movies";
import { Cast } from "components/Cast/Cast";
import { Reviews } from "components/Reviews/Reviews";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101',
        display: 'flex',
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          
          {/* рут с ошибкой */}
        </Route>
      </Routes>
    </div>
  );
};
