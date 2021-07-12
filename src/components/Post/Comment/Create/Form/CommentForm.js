import React, { useState } from "react";
import { useDispatch } from "react-redux";
import StarRatings from "react-star-ratings";

import styles from "./CommentForm.module.scss";

const CommentForm = ({ index, action, id }) => {
    const dispatch = useDispatch();

    const [rating, setRating] = useState(0);
    let body = <span>{""}</span>;
    const emojis = ["-smile-beam", "-sad-cry", "-grin-squint-tears", "-sad-tear"];

    const addComment = (e) => {
        e.preventDefault();
        if (index) {
            dispatch({
                type: "ADD_COMMENT",
                payload: { body, rating, id, actionType: action, commentIndex: index },
            });
            return;
        }

        dispatch({ type: "ADD_COMMENT", payload: { body, rating, id, actionType: action } });
    };

    const commentChenged = (e) => {
        const newComment = e.target.value;
        const oldComment = body.props.children;
        const span = <span>{[oldComment, newComment[newComment.length - 1]]}</span>;
        body = span;
    };

    const emojiClicked = (e) => {
        const emoji = e.target;
        const emojiReact = <i className={emoji.className} key={emoji.getAttribute("index")}></i>;
        const span = <span>{[body.props.children, emojiReact]}</span>;
        body = span;
    };

    return (
        <form className={styles.commentForm} onSubmit={(e) => addComment(e)}>
            <textarea
                type="text"
                placeholder="Comment"
                name="comment"
                id="comment"
                onChange={(e) => commentChenged(e)}
            />
            <div className="emoji">
                {emojis.map((emoji, index) => (
                    <button key={index} type="button">
                        <i index={index} className={`fas fa${emoji} fa-2x emoji`} onClick={(e) => emojiClicked(e)}></i>
                    </button>
                ))}
            </div>
            <StarRatings
                rating={rating}
                numberOfStars={5}
                starEmptyColor="#252A34"
                starRatedColor={rating > 4 ? "green" : rating > 3 ? "yellow" : "red"}
                starHoverColor="#FFC947"
                changeRating={(newRating) => setRating(newRating)}
                starDimension="25px"
                starSpacing="0px"
                name="rating"
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default CommentForm;
