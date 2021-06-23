import { Component } from "react";

import { PoolPost } from "../Post";
import Pagination from "./Pagination";
import styles from "./Pool.module.scss";

class Pool extends Component {
    render() {
        return (
            <main className={styles.pool}>
                <div className={styles.postsContainer}>
                    {this.props.posts.map((post, index) => (
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

                <Pagination
                    postsCount={this.props.postsCount}
                    getPosts={(count, page) => this.props.getPosts(count, page)}
                />
            </main>
        );
    }
}

export default Pool;
