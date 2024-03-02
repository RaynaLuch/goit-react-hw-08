import css from "./SearchBox.module.css";
import { getFilter } from "../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = (filter) => dispatch(setFilter(filter));

  return (
    <div className={css.search}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        id="search"
        type="text"
        value={filter.name}
        onChange={(evt) => handleFilterChange(evt.target.value)}
      />
    </div>
  );
};
