import { Component } from "react";

import styles from "./Search.module.scss";

class Search extends Component {
    formSubmit(e) {
        e.preventDefault();
        const text = e.target.querySelector("#search").value;
        this.props.search(text);
    }

    render() {
        return (
            <form id="searchForm" onSubmit={(e) => this.formSubmit(e)} className={styles.search}>
                <input type="text" name="search" id="search" placeholder="search" />
            </form>
        );
    }
}

export default Search;
