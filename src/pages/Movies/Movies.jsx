import { SearchMovies } from "components/SearchMovies/SearchMovies";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";

export const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';

  const handleSubmit = evt => {
    evt.preventDefault();

    const inputValue = evt.currentTarget.elements.searchQuery.value;

        if (inputValue === '') {
      return;
    }

    setSearchParams({ query: inputValue });

    evt.currentTarget.reset();
  };

    return (
        <div>
        <NavLink to='/'>
            Go back
            </NavLink>
            <form onSubmit={handleSubmit}>
                <input type="text" name="searchQuery"></input>
                <button type="submit">Search</button>
            </form>
        {query && <SearchMovies query={query} />}
            <Outlet />
            </div>
    )


}