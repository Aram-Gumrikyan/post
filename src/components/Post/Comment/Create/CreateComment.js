import { Component } from "react";

import CommentForm from "./Form";
import styles from "./CreateComment.module.scss";

class CreateComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisibility: false,
        };
    }

    render() {
        return (
            <div className={styles.createComment}>
                <button onClick={() => this.setState({ formVisibility: !this.state.formVisibility })}>
                    <i className="fas fa-plus fa-2x"></i>
                </button>
                {this.state.formVisibility && (
                    <CommentForm
                        id={this.props.id}
                        addComment={(body, rating, id) => this.props.addComment(body, rating, id)}
                    />
                )}
            </div>
        );
    }
}

export default CreateComment;
