import { Header, HomeLink, MoviesLink } from "./Layout.styled";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

export const Layout = () => {
    return (
        <Header>
            <nav>
                <HomeLink to="/" end>
                    Home
                </HomeLink>

                <MoviesLink to="/movies" end>
                    Movies
                </MoviesLink>
            </nav>
            <Suspense fallback={<h2>Loading...</h2>}>
                <Outlet />
            </Suspense>
        </Header>
    )
}