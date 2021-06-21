import { Component } from "react";
import StarRatings from "react-star-ratings";

class Comment extends Component {
    // props -> (body, rating)
    render() {
        return (
            <div className="comment">
                <p className="body">{this.props.body}</p>
                <div>
                    <StarRatings
                        rating={this.props.rating}
                        numberOfStars={5}
                        starEmptyColor={"#252A34"}
                        starRatedColor={"#3EDBF0"}
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
