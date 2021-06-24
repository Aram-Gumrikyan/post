import { Component } from "react";

import styles from "./Pagination.module.scss";

const defPropsCount = 2;

class Pagination extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: defPropsCount,
            pages: this.calcPages(this.props.postsCount, defPropsCount),
            page: 1,
        };
        this.props.getPosts(this.state.count, 1);
    }

    chengPage(page) {
        this.props.getPosts(this.state.count, page);
        this.setState({ page });
    }

    calcPages(postsCount, count) {
        if (postsCount / count > 2 || postsCount / count === 1) {
            return Math.ceil(postsCount / count);
        }
        return 2;
    }

    chengCount(e) {
        e.preventDefault();
        const count = +e.target.querySelector("#count").value;

        if (!count || count > 8 || count < 1) {
            return;
        }

        const pages = this.calcPages(this.props.postsCount, count);

        this.setState({ count, pages, page: 1 });
        this.props.getPosts(count, 1);
    }

    render() {
        const pages = [];

        for (let i = 1; i <= this.state.pages; i++) {
            pages.push(
                <li key={i} className={`${this.state.page === i ? styles.activ : ""}`}>
                    <button onClick={() => this.chengPage(i)}>{i}</button>
                </li>
            );
        }
        return (
            <div className={styles.pagination}>
                <ul>{pages}</ul>
                <form onSubmit={(e) => this.chengCount(e)} id="countForm">
                    <label htmlFor="count">Count: </label>
                    <input
                        type="number"
                        name="count"
                        id="count"
                        max={this.props.postsCount}
                        min="1"
                        defaultValue={this.state.count}
                    />
                </form>
            </div>
        );
    }
}

export default Pagination;
