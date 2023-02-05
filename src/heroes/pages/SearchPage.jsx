import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components/HeroCard"
import queryString from 'query-string';
import { getHeroesByName } from "../helpers/getHeroesByName";

export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search)

  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();

    navigate(`?q=${searchText.toLowerCase().trim()}`)
  }

  return (
    <>
      <div className="row mt-3">
        <div className="col-5 mt-1">
          <h4>Search</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {
            (q === '')
              ? (<div className="alert alert-primary">
                Search a hero
              </div>)
              : (heroes.length === 0) && (<div className="alert alert-danger">
                There's no results for <b>{q}</b>
              </div>)
          }



          {
            heroes.map((heroe) => {
              return (
                <HeroCard key={heroe.id} {...heroe} />
              )
            })
          }

        </div>
      </div>
    </>
  )
}