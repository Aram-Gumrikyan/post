import { useSelector } from "react-redux";

import { PoolPost } from "../Post";
import Search from "./Search";
import Pagination from "./Pagination";
import styles from "./Pool.module.scss";

const Pool = (props) => {
    const displayedPosts = useSelector((state) => state.displayedPosts);
    return (
        <main className={styles.pool}>
            <Search />

            <div className={styles.postsContainer}>
                {displayedPosts.map((post, index) => (
                    <PoolPost
                        key={index}
                        title={post.title}
                        description={post.description}
                        comments={post.comments}
                        id={post.id}
                        disabled={post.disabled}
                    />
                ))}
            </div>

            <Pagination />
        </main>
    );
};

export default Pool;
