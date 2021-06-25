import React, { Component } from "react";
import StarRatings from "react-star-ratings";

import styles from "./CommentForm.module.scss";

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
        };
        this.comment = <span>{""}</span>;
        this.emojis = ["-smile-beam", "-sad-cry", "-grin-squint-tears", "-sad-tear"];
    }

    changeRating(newRating) {
        this.setState({
            rating: newRating,
        });
    }

    chengComments(e) {
        e.preventDefault();
        if (this.props.index) {
            this.props.chengComments(
                this.comment,
                this.state.rating,
                this.props.id,
                this.props.action,
                this.props.index
            );
            return;
        }
        this.props.chengComments(this.comment, this.state.rating, this.props.id, this.props.action);
    }

    commentChenged(e) {
        const newComment = e.target.value;
        const oldComment = this.comment.props.children;
        const span = <span>{[oldComment, newComment[newComment.length - 1]]}</span>;
        this.comment = span;
    }

    emojiClicked(e) {
        const emoji = e.target;
        const emojiReact = <i className={emoji.className} key={emoji.getAttribute("index")}></i>;
        const span = <span>{[this.comment.props.children, emojiReact]}</span>;
        this.comment = span;
    }

    render() {
        return (
            <form className={styles.commentForm} onSubmit={(e) => this.chengComments(e)}>
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
