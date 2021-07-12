import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";

import styles from "./Pagination.module.scss";

const defPropsCount = 2;

const Pagination = (props) => {
    const dispatch = useDispatch();
    const postsCount = useSelector((state) => state.posts.length);

    const [count, setCount] = useState(defPropsCount);
    const [pages, setPages] = useState(calcPages(count));
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch({ type: "GET_POSTS", payload: { count, page } });
    }, [count, page, dispatch]);

    function calcPages(count) {
        if (postsCount / count > 2 || postsCount / count === 1) {
            return Math.ceil(postsCount / count);
        }
        return 2;
    }

    const chengCount = (e) => {
        const count = +e.target.value;

        if (!count || count > postsCount || count < 1) {
            return;
        }

        const pages = calcPages(count);

        setCount(count);
        setPages(pages);
        setPage(1);
    };

    const pagesNavigation = [];

    for (let i = 1; i <= pages; i++) {
        const className = classNames({ [styles.activ]: page === i });
        pagesNavigation.push(
            <li key={i} className={className}>
                <button onClick={() => setPage(i)}>{i}</button>
            </li>
        );
    }

    return (
        <div className={styles.pagination}>
            <ul>{pagesNavigation}</ul>
            <form onSubmit={(e) => e.preventDefault()} id="countForm">
                <label htmlFor="count">Count: </label>
                <input
                    type="number"
                    name="count"
                    id="count"
                    max={postsCount}
                    min="1"
                    defaultValue={count}
                    onChange={(e) => chengCount(e)}
                />
            </form>
        </div>
    );
};

export default Pagination;
