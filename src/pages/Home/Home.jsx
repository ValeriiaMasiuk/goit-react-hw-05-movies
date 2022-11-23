import { TrendingFilms } from "components/TrendingFilms/TrendingFilms";

import { HomeTitle } from "./Home.styled";

const Home = () => {
    return (
        <div style={{
            paddingRight: '100px',
        }}>
            <HomeTitle>Trending films</HomeTitle>
            <TrendingFilms/>
        </div>
    )
}

export default Home;