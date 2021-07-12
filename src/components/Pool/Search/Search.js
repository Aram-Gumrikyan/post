import { useRef } from "react";
import { useDispatch } from "react-redux";

import styles from "./Search.module.scss";

const Search = (props) => {
    const dispatch = useDispatch();
    const searchInput = useRef(null);

    const search = () => {
        dispatch({ type: "SEARCH", payload: { text: searchInput.current.value } });
    };

    return (
        <form
            id="searchForm"
            onSubmit={(e) => {
                e.preventDefault();
                search();
            }}
            className={styles.search}
        >
            <input ref={searchInput} type="text" name="search" id="search" placeholder="search" onChange={search} />
        </form>
    );
};

export default Search;
