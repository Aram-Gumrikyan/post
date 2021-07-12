import classNames from "classnames";

import Comment from "./Comment/Show";
import CreateComment from "./Comment/Create";
import styles from "./PoolPost.module.scss";

const PoolPost = ({ title, description, comments, id, disabled }) => {
    const poolPostClass = classNames(styles.mainPost, { [styles.disabled]: disabled });

    return (
        <div className={poolPostClass}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <div className="comments">
                {comments.map((comment, index) => (
                    <Comment
                        key={index}
                        body={comment.body}
                        rating={comment.rating}
                        index={index}
                        id={id}
                        type={comment.type}
                    />
                ))}
            </div>

            <CreateComment action="add" id={id} />
        </div>
    );
};

export default PoolPost;
