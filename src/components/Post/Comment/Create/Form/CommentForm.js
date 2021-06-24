import React, { Component } from "react";
import StarRatings from "react-star-ratings";

import styles from "./CommentForm.module.scss";

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
            comment: <span>{""}</span>,
        };

        this.emojis = ["-smile-beam", "-sad-cry", "-grin-squint-tears", "-sad-tear"];
    }

    changeRating(newRating) {
        this.setState({
            rating: newRating,
        });
    }

    addComment(e) {
        e.preventDefault();
        this.props.addComment(this.state.comment, this.state.rating, this.props.id);
    }

    commentChenged(e) {
        const newComment = e.target.value;

        this.setState(({ comment }) => {
            const span = <span>{comment.props.children + newComment[newComment.length - 1]}</span>;
            return {
                comment: span,
            };
        });
    }

    emojiClicked(e) {
        const emoji = e.target;
        const emojiJSX = <i className={emoji.className} key={emoji.getAttribute("index")}></i>;

        this.setState(({ comment }) => {
            const span = React.createElement("span", null, [comment.props.children, emojiJSX]);
            return {
                comment: span,
            };
        });
    }

    render() {
        return (
            <form className={styles.commentForm} onSubmit={(e) => this.addComment(e)}>
                <textarea
                    type="text"
                    placeholder="Comment"
                    name="comment"
                    id="comment"
                    onChange={(e) => this.commentChenged(e)}
                />
                <div className="emoji">
                    {this.emojis.map((emoji, index) => (
                        <button key={index} type="button">
                            <i
                                index={index}
                                className={`fas fa${emoji} fa-2x emoji`}
                                onClick={(e) => this.emojiClicked(e)}
                            ></i>
                        </button>
                    ))}
                </div>
                <StarRatings
                    rating={this.state.rating}
                    numberOfStars={5}
                    starEmptyColor="#252A34"
                    starRatedColor={this.state.rating > 4 ? "green" : this.state.rating > 3 ? "yellow" : "red"}
                    starHoverColor="#FFC947"
                    changeRating={(newRating) => this.changeRating(newRating)}
                    starDimension="25px"
                    starSpacing="0px"
                    name="rating"
                />
                <button type="submit">Submit</button>
                <div id="newRoot"></div>
            </form>
        );
    }
}

export default CommentForm;
