import { TrendingFilms } from "components/TrendingFilms/TrendingFilms"

export const Home = () => {
    return (
        <div style={{
            paddingRight: '100px',
        }}>
            <h1>Trending movies</h1>
            <TrendingFilms/>
        </div>
    )

}