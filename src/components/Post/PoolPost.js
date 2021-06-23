import { Component } from "react";

import Comment from "./Comment/Show";
import styles from "./PoolPost.module.scss";

class PoolPost extends Component {
    // props -> (disabled, title, description, comments, id)
    render() {
        return (
            <div className={`${styles.mainPost} ${this.props.disabled ? styles.disabled : ""}`}>
                <h2 className={styles.title}>{this.props.title}</h2>
                <p className={styles.description}>{this.props.description}</p>
                {this.props.comments.map((comment, index) => (
                    <Comment key={index} body={comment.body} rating={comment.rating} />
                ))}
            </div>
        );
    }
}

export default PoolPost;
