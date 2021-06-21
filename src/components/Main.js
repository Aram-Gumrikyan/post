import { Component } from "react";
import MainPost from "./MainPost";
import "../styles/Main.scss";

class Main extends Component {
    render() {
        return (
            <main className="main">
                {this.props.pool.map((post, index) => (
                    <MainPost
                        key={"post-" + index}
                        title={post.title}
                        description={post.description}
                        comments={post.comments}
                        id={post.id}
                        disabled={post.disabled}
                    />
                ))}
            </main>
        );
    }
}

export default Main;
