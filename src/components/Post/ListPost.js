import StarRatings from "react-star-ratings";

import styles from "./ListPost.module.scss";

const ListPost = ({ id, title, rating, delPost }) => {
    return (
        <div className={styles.listPost}>
            <h3>{title}</h3>

            <StarRatings
                rating={rating}
                numberOfStars={5}
                starEmptyColor={"#252A34"}
                starRatedColor={rating > 4 ? "green" : rating > 3 ? "yellow" : "red"}
                starDimension="25px"
                starSpacing="0px"
                name="rating"
            />

            <button className={styles.del} onClick={(e) => delPost()}>
                <i className="fas fa-trash-alt"></i>
            </button>
        </div>
    );
};

export default ListPost;
