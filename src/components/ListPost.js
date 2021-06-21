import { Component } from "react";
import StarRatings from "react-star-ratings";

class ListPost extends Component {
    // props -> (id, title, rating, togglePoolVisual, delPost)
    delPost(e) {
        this.props.togglePoolVisual(this.props.id);
        this.props.delPost(this.props.id);
    }

    render() {
        return (
            <div className="listPost">
                <h3 className="title">{this.props.title}</h3>
                <StarRatings
                    rating={this.props.rating}
                    numberOfStars={5}
                    starEmptyColor={"#252A34"}
                    starRatedColor={"#3EDBF0"}
                    starDimension="25px"
                    starSpacing="0px"
                    name="rating"
                />
                <button className="del" onClick={(e) => this.delPost(e)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        );
    }
}

export default ListPost;
