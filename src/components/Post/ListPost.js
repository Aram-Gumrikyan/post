import { Component } from "react";
import StarRatings from "react-star-ratings";

import styles from "./ListPost.module.scss";

class ListPost extends Component {
    // props -> (id, title, rating, delPost)
    delPost(e) {
        this.props.delPost(this.props.id);
    }

    render() {
        const { id, title, rating, delPost } = this.props;
        return (
            <div className={styles.listPost}>
                <h3>{title}</h3>
                <StarRatings
                    rating={rating}
                    numberOfStars={5}
                    starEmptyColor={"#252A34"}
                    starRatedColor={"#3EDBF0"}
                    starDimension="25px"
                    starSpacing="0px"
                    name="rating"
                />
                <button className={styles.del} onClick={(e) => delPost(id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        );
    }
}

export default ListPost;
