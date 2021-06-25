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
                        <Comment
                            key={index}
                            body={comment.body}
                            rating={comment.rating}
                            index={index}
                            id={this.props.id}
                            type={comment.type}
                            chengComments={(body, rating, id, action, commentIndex) =>
                                this.props.chengComments(body, rating, id, action, commentIndex)
                            }
                        />
                    ))}
                </div>

                <CreateComment
                    action="add"
                    id={this.props.id}
                    chengComments={(body, rating, id, action) => this.props.chengComments(body, rating, id, action)}
                />
            </div>
        );
    }
}

export default PoolPost;
