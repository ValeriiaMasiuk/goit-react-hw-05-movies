import { Route, Routes } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { Home } from "../../pages/Home/Home";
import { MovieDetails } from "components/MovieDetails/MovieDetails";

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
          <Route path="/movies/:id" element={<MovieDetails />} />
          {/* <Route path="/movies" element={<Movies />} /> */}
          {/* <Route path="/movies/:movieId" element={<MovieDetails />}
                <Route path="/movies/:movieId/cast" element={<Cast />} />
                <Route path="/movies/:movieId/reviews" element={<Reviews />} />
              </Route> */}
          
          {/* рут с ошибкой */}
        </Route>
      </Routes>
    </div>
  );
};
