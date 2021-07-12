import CreateComment from "../Create";
import StarRatings from "react-star-ratings";

const Comment = ({ body, rating, index, id, type }) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginLeft: type === "replay" ? "1rem" : "0",
            }}
        >
            <p>{body}</p>
            {type !== "replay" && <CreateComment index={index} action="insert" id={id} />}
            <div>
                <StarRatings
                    rating={rating}
                    numberOfStars={5}
                    starEmptyColor={"#252A34"}
                    starRatedColor={rating > 4 ? "green" : rating > 3 ? "yellow" : "red"}
                    starDimension="25px"
                    starSpacing="0px"
                    name="rating"
                />
            </div>
        </div>
    );
};

export default Comment;
