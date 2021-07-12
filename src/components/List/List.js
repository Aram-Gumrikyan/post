import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ListPost } from "../Post";
import styles from "./List.module.scss";

const sortingTypes = {
    GROW: "up",
    DECREASE: "down",
};

const List = () => {
    const displayedPosts = [...useSelector((state) => state.displayedPosts)];
    const dispatch = useDispatch();

    const [posts, setPosts] = useState([]);
    const [sortingType, setSortingType] = useState(sortingTypes.GROW);

    function getMiddleRating(post) {
        const sumOfRatings = post.comments.reduce((initRate, comment) => initRate + comment.rating, 0);
        const middleRating = sumOfRatings / post.comments.length || 0;
        return middleRating;
    }

    function addPost() {
        const post = displayedPosts.reverse().find((post) => post.disabled === false);

        if (!post) {
            return;
        }

        const listPosts = [...posts];
        post.middleRating = getMiddleRating(post);
        listPosts.push(post);

        setPosts(listPosts);

        dispatch({ type: "TOGG_VISIBILITY", payload: { id: post.id } });
    }

    const changeSortingType = () => {
        const changedType = sortingType === sortingTypes.GROW ? sortingTypes.DECREASE : sortingTypes.GROW;
        setSortingType(changedType);
    };

    const delPost = (id) => {
        dispatch({ type: "TOGG_VISIBILITY", payload: { id } });

        const newPosts = [...posts];
        const postIndex = newPosts.findIndex((post) => post.id === id);
        newPosts.splice(postIndex, 1);

        setPosts(newPosts);
    };

    function comparePosts(el1, el2) {
        switch (sortingType) {
            case sortingTypes.GROW: {
                return el1.middleRating - el2.middleRating;
            }
            case sortingTypes.DECREASE: {
                return el2.middleRating - el1.middleRating;
            }
            default:
        }
    }

    const sortedPosts = [...posts];
    sortedPosts.sort((el1, el2) => comparePosts(el1, el2));

    return (
        <div className={styles.list}>
            <div className={styles.buttons}>
                <button onClick={() => addPost()}>
                    <i className="fas fa-plus fa-2x"></i>
                </button>
                <button>
                    <i className={`fas fa-sort-amount-${sortingType} fa-2x`} onClick={() => changeSortingType()}></i>
                </button>
            </div>

            {sortedPosts.map((post, index) => {
                return (
                    <ListPost
                        key={index}
                        id={post.id}
                        title={post.title}
                        rating={post.middleRating}
                        delPost={() => delPost(post.id)}
                    />
                );
            })}
        </div>
    );
};

export default List;
