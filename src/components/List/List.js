import { Component } from "react";

import { ListPost } from "../Post";
import styles from "./List.module.scss";

const sortingTypes = {
    GROW: "up",
    DECREASE: "down",
};

class List extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            posts: [],
            sortingType: sortingTypes.GROW,
        };
    }

    getMiddleRating(post) {
        const sumOfRatings = post.comments.reduce((initRate, comment) => initRate + comment.rating, 0);
        const middleRating = sumOfRatings / post.comments.length || 0;
        return middleRating;
    }

    addPost() {
        const mainPosts = [...this.props.posts];
        const post = mainPosts.reverse().find((post) => post.disabled === false);

        if (!post) {
            return;
        }

        this.setState((state) => {
            const listPosts = [...state.posts];
            post.middleRating = this.getMiddleRating(post);
            listPosts.push(post);

            return {
                posts: listPosts,
            };
        });

        this.props.togglePostVisibility(post.id);
    }

    delPost(id) {
        this.props.togglePostVisibility(id);

        this.setState((state) => {
            const posts = [...state.posts];
            const postIndex = posts.findIndex((post) => post.id === id);
            posts.splice(postIndex, 1);

            return {
                posts,
            };
        });
    }

    changeSortingType() {
        let changedType;

        switch (this.state.sortingType) {
            case sortingTypes.GROW:
                changedType = sortingTypes.DECREASE;
                break;
            case sortingTypes.DECREASE:
                changedType = sortingTypes.GROW;
                break;
            default:
        }

        this.setState({ sortingType: changedType });
    }

    comparePosts(el1, el2) {
        switch (this.state.sortingType) {
            case sortingTypes.GROW: {
                return el1.middleRating - el2.middleRating;
            }
            case sortingTypes.DECREASE: {
                return el2.middleRating - el1.middleRating;
            }
            default:
        }
    }

    render() {
        this.state.posts.sort((el1, el2) => this.comparePosts(el1, el2));

        return (
            <div className={styles.list}>
                <div className={styles.buttons}>
                    <button onClick={() => this.addPost()}>
                        <i className="fas fa-plus fa-2x"></i>
                    </button>
                    <button onClick={() => this.changeSortingType()}>
                        <i className={`fas fa-sort-amount-${this.state.sortingType} fa-2x`}></i>
                    </button>
                </div>

                {this.state.posts.map((post, index) => {
                    return (
                        <ListPost
                            key={index}
                            id={post.id}
                            title={post.title}
                            rating={post.middleRating}
                            delPost={(id) => this.delPost(id)}
                        />
                    );
                })}
            </div>
        );
    }
}

export default List;
