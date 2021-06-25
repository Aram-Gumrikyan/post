import { Component } from "react";

import CreateComment from "../Create";
import StarRatings from "react-star-ratings";

class Comment extends Component {
    // props -> (body, rating)
    render() {
        return (
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginLeft: this.props.type === "replay" ? "1rem" : "0",
                }}
            >
                <p>{this.props.body}</p>
                {this.props.type !== "replay" && (
                    <CreateComment
                        index={this.props.index}
                        action="insert"
                        id={this.props.id}
                        chengComments={(body, rating, id, action, commentIndex) =>
                            this.props.chengComments(body, rating, id, action, commentIndex)
                        }
                    />
                )}

                <div>
                    <StarRatings
                        rating={this.props.rating}
                        numberOfStars={5}
                        starEmptyColor={"#252A34"}
                        starRatedColor={this.props.rating > 4 ? "green" : this.props.rating > 3 ? "yellow" : "red"}
                        starDimension="25px"
                        starSpacing="0px"
                        name="rating"
                    />
                </div>
            </div>
        );
    }
}

export default Comment;
