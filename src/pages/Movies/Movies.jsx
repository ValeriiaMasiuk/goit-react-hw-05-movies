import { SearchMovies } from "components/SearchMovies/SearchMovies";
import { Outlet, useSearchParams } from "react-router-dom";

import { SearchForm, SearchBtn, Input, SearchIcon } from "./Movies.styled";

const Movies = () => {
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
            <SearchForm onSubmit={handleSubmit}>
                <Input type="text" name="searchQuery"></Input>
                <SearchBtn type="submit">
                    <SearchIcon/>
                </SearchBtn>
            </SearchForm>
        {query && <SearchMovies query={query} />}
            <Outlet />
            </div>
    )
}

export default Movies