import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { nameFilter } from "../../redux/filtersSlice.js";

export default function SearchBox() {
  const dispatch = useDispatch();
  return (
    <div className={css.searchBox}>
      <p>Search by name</p>
      <input
        type="text"
        onChange={e => dispatch(nameFilter(e.target.value))}
        className={css.searchInput}
      />
    </div>
  );
}
