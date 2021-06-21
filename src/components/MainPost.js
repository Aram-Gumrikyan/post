import { Component } from "react";
import Comment from "./Comment";

class MainPost extends Component {
    // props -> (title, description, comments, id)
    render() {
        return (
            <div className={`post ${this.props.disabled ? "disabled" : ""}`}>
                <h2 className="title">{this.props.title}</h2>
                <p className="description">{this.props.description}</p>
                {this.props.comments.map((comment, index) => (
                    <Comment
                        key={"comment-" + this.props.id + "-" + index}
                        body={comment.body}
                        rating={comment.rating}
                    />
                ))}
            </div>
        );
    }
}

export default MainPost;
