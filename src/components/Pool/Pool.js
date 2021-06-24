import { Component } from "react";

import { PoolPost } from "../Post";
import Search from "./Search";
import Pagination from "./Pagination";
import styles from "./Pool.module.scss";

class Pool extends Component {
    render() {
        return (
            <main className={styles.pool}>
                <Search search={(text) => this.props.search(text)} />

                <div className={styles.postsContainer}>
                    {this.props.posts.map((post, index) => (
                        <PoolPost
                            key={index}
                            title={post.title}
                            description={post.description}
                            comments={post.comments}
                            id={post.id}
                            disabled={post.disabled}
                            addComment={(body, rating, id) => this.props.addComment(body, rating, id)}
                        />
                    ))}
                </div>

                <Pagination
                    postsCount={this.props.postsCount}
                    getPosts={(count, page) => this.props.getPosts(count, page)}
                />
            </main>
        );
    }
}

export default Pool;
