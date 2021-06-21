import { Component } from "react";
import ListPost from "./ListPost";

class List extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            pool: [],
            bigToSmall: true,
        };
    }

    addPost() {
        let index = this.props.pool.length - 1;
        for (index; index >= 0; index--) {
            if (!this.props.pool[index].disabled) {
                // eslint-disable-next-line no-loop-func
                this.setState((state, props) => {
                    const pool = [...state.pool];
                    const post = props.pool[index];
                    const sumOfRatings = post.comments.reduce((initRate, comment) => initRate + comment.rating, 0);
                    const middleRating = sumOfRatings / post.comments.length || 0;
                    post.middleRating = middleRating;
                    pool.push(post);

                    return {
                        pool,
                    };
                });

                this.props.togglePoolVisual(this.props.pool[index].id);

                break;
            }
        }
    }

    delPost(id) {
        this.setState((state) => {
            const pool = [...state.pool];
            const postIndex = pool.findIndex((post) => post.id === id);
            pool.splice(postIndex, 1);

            return {
                pool,
            };
        });
    }

    componentDidUpdate(prevProps, prevState) {
        const pool = [...this.state.pool];
        pool.sort((el1, el2) => {
            if (this.state.bigToSmall) {
                return el2.middleRating - el1.middleRating;
            } else {
                return el1.middleRating - el2.middleRating;
            }
        });
        if (JSON.stringify(pool) !== JSON.stringify(this.state.pool)) {
            this.setState({ pool: pool });
        }
    }

    render() {
        return (
            <div className="list">
                <div className="buttons">
                    <button onClick={() => this.addPost()}>
                        <i className="fas fa-plus fa-2x"></i>
                    </button>
                    {this.state.bigToSmall ? (
                        <button onClick={() => this.setState({ bigToSmall: false })}>
                            <i className="fas fa-sort-amount-down fa-2x"></i>
                        </button>
                    ) : (
                        <button onClick={() => this.setState({ bigToSmall: true })}>
                            <i className="fas fa-sort-amount-up fa-2x"></i>
                        </button>
                    )}
                </div>

                {this.state.pool.map((post, index) => {
                    return (
                        <ListPost
                            key={index}
                            id={post.id}
                            title={post.title}
                            rating={post.middleRating}
                            togglePoolVisual={(id) => this.props.togglePoolVisual(id)}
                            delPost={(id) => this.delPost(id)}
                        />
                    );
                })}
            </div>
        );
    }
}

export default List;
