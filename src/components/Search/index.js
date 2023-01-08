import { RiSearch2Line } from "react-icons/ri";
const SearchBox = ({ setSearchInput, onSearchClickHandler,searchInput }) => {
    return (
        <div className="left-content">
            <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback">
                    <RiSearch2Line className="search-icon" />
                </span>

                <input type="text" className="form-control"
                    value={searchInput}
                    onChange={event => { setSearchInput(event.target.value) }}
                    placeholder="Search by pokemons name or move or ability..." />
                <button type="button" onClick={onSearchClickHandler}>Search</button>
            </div>
        </div>
    )
}
export default SearchBox;