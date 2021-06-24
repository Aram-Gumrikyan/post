import { Component } from "react";

import Comment from "./Comment/Show";
import CreateComment from "./Comment/Create";
import styles from "./PoolPost.module.scss";

class PoolPost extends Component {
    // props -> (disabled, title, description, comments, id)
    render() {
        return (
            <div className={`${styles.mainPost} ${this.props.disabled ? styles.disabled : ""}`}>
                <h2 className={styles.title}>{this.props.title}</h2>
                <p className={styles.description}>{this.props.description}</p>
                <div className="comments">
                    {this.props.comments.map((comment, index) => (
                        <Comment key={index} body={comment.body} rating={comment.rating} />
                    ))}
                </div>

                <CreateComment
                    id={this.props.id}
                    addComment={(body, rating, id) => this.props.addComment(body, rating, id)}
                />
            </div>
        );
    }
}

export default PoolPost;
