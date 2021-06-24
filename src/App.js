import { Component } from "react";

import Pool from "./components/Pool";
import List from "./components/List";
import "./App.scss";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {
                    id: 1,
                    title: "It was easy to spot her.",
                    description:
                        "All you needed to do was look at her socks. They were never a matching pair. One would be green while the other would be blue. One would reach her knee while the other barely touched her ankle. Every other part of her was perfect, but never the socks. They were her micro act of rebellion.",
                    comments: [
                        {
                            body: "He sat staring at the person in the train stopped at the station going in the opposite direction.",
                            rating: 5,
                        },
                        {
                            body: "He sat staring at the person in the train stopped at the station going in the opposite direction.",
                            rating: 3,
                        },
                        {
                            body: "He sat staring at the person in the train stopped at the station going in the opposite direction.",
                            rating: 4.5,
                        },
                    ],
                    disabled: false,
                },
                {
                    id: 2,
                    title: "There are only three ways to make this work.",
                    description:
                        "The first is to let me take care of everything. The second is for you to take care of everything. The third is to split everything 50 / 50. I think the last option is the most preferable, but I'm certain it'll also mean the end of our marriage.",
                    comments: [
                        {
                            body: "He sat staring at the person in the train stopped at the station going in the opposite direction.",
                            rating: 2,
                        },
                        {
                            body: "He sat staring at the person in the train stopped at the station going in the opposite direction.",
                            rating: 3.5,
                        },
                    ],
                    disabled: false,
                },
                {
                    id: 3,
                    title: "What have you noticed today?",
                    description:
                        "I noticed that if you outline the eyes, nose, and mouth on your face with your finger, you make an  which makes perfect sense, but is something I never noticed before. What have you noticed today?",
                    comments: [
                        {
                            body: "He sat staring at the person in the train stopped at the station going in the opposite direction.",
                            rating: 5,
                        },
                    ],
                    disabled: false,
                },
                {
                    id: 4,
                    title: "'Begin today!' That's all the note said",
                    description:
                        "There was no indication from where it came or who may have written it. Had it been meant for someone else? Meghan looked around the room, but nobody made eye contact back. For a brief moment, she thought it might be a message for her to follow her dreams, but ultimately decided it was easier to ignore it as she crumpled it up and threw it away.",
                    comments: [
                        {
                            body: "He sat staring at the person in the train stopped at the station going in the opposite direction.",
                            rating: 4,
                        },
                        {
                            body: "He sat staring at the person in the train stopped at the station going in the opposite direction.",
                            rating: 3,
                        },
                    ],
                    disabled: false,
                },
                {
                    id: 5,
                    title: "It was just a burger.",
                    description:
                        "Why couldn't she understand that? She knew he'd completely changed his life around her eating habits, so why couldn't she give him a break this one time? She wasn't even supposed to have found out. Yes, he had promised her and yes, he had broken that promise, but still in his mind, all it had been was just a burger.",
                    comments: [
                        {
                            body: "He sat staring at the person in the train stopped at the station going in the opposite direction.",
                            rating: 1,
                        },
                        {
                            body: "He sat staring at the person in the train stopped at the station going in the opposite direction.",
                            rating: 0,
                        },
                        {
                            body: "He sat staring at the person in the train stopped at the station going in the opposite direction.",
                            rating: 2,
                        },
                    ],
                    disabled: false,
                },

                {
                    id: 6,
                    title: "The red ball sat proudly at the top of the toybox.",
                    description:
                        " It had been the last to be played with and anticipated it would be the next as well. The other toys grumbled beneath. At one time each had held the spot of the red ball, but over time they had sunk deeper and deeper into the toy box.",
                    comments: [
                        {
                            body: "He sat staring at the person in the train stopped at the station going in the opposite direction.",
                            rating: 2,
                        },
                        {
                            body: "He sat staring at the person in the train stopped at the station going in the opposite direction.",
                            rating: 2,
                        },
                        {
                            body: "He sat staring at the person in the train stopped at the station going in the opposite direction.",
                            rating: 3,
                        },
                    ],
                    disabled: false,
                },

                {
                    id: 7,
                    title: "I haven't bailed on writing.",
                    description:
                        "Look, I'm generating a random paragraph at this very moment in an attempt to get my writing back on track. I am making an effort. I will start writing consistently again!",
                    comments: [
                        {
                            body: "He sat staring at the person in the train stopped at the station going in the opposite direction.",
                            rating: 5,
                        },
                        {
                            body: "He sat staring at the person in the train stopped at the station going in the opposite direction.",
                            rating: 4.9,
                        },
                        {
                            body: "He sat staring at the person in the train stopped at the station going in the opposite direction.",
                            rating: 4,
                        },
                    ],
                    disabled: false,
                },

                {
                    id: 8,
                    title: "The day had begun on a bright note.",
                    description:
                        "Why couldn't she understand that? She knew he'd completely changed his life around her eating habits, so why couldn't she give him a break this one time? She wasn't even supposed to have found out. Yes, he had promised her and yes, he had broken that promise, but still in his mind, all it had been was just a burger.",
                    comments: [
                        {
                            body: "He sat staring at the person in the train stopped at the station going in the opposite direction.",
                            rating: 3,
                        },
                        {
                            body: "He sat staring at the person in the train stopped at the station going in the opposite direction.",
                            rating: 2,
                        },
                        {
                            body: "He sat staring at the person in the train stopped at the station going in the opposite direction.",
                            rating: 4,
                        },
                    ],
                    disabled: false,
                },
            ],
            displayedPosts: [],
        };
    }

    chengPostProperty(state, index, name, action, value) {
        const posts = [...state[name]];
        const post = { ...posts[index] };
        if (action === "toggle") {
            post.disabled = !post.disabled;
            posts[index] = post;
            return posts;
        }

        const comment = {
            body: value.body,
            rating: value.rating,
        };
        const comments = [...post.comments];
        comments.push(comment);
        post.comments = comments;
        posts[index] = post;
        return posts;
    }

    togglePostVisibility(id) {
        const postIndex = this.state.posts.findIndex((post) => post.id === id);
        const displayedPostIndex = this.state.displayedPosts.findIndex((post) => post.id === id);
        this.setState((state) => {
            const posts = this.chengPostProperty(state, postIndex, "posts", "toggle");
            const displayedPosts = this.chengPostProperty(state, displayedPostIndex, "displayedPosts", "toggle");

            return {
                posts,
                displayedPosts,
            };
        });
    }

    addComment(body, rating, id) {
        const postIndex = this.state.posts.findIndex((post) => post.id === id);
        const displayedPostIndex = this.state.displayedPosts.findIndex((post) => post.id === id);
        this.setState((state) => {
            const posts = this.chengPostProperty(state, postIndex, "posts", "add", { body, rating });
            const displayedPosts = this.chengPostProperty(state, displayedPostIndex, "displayedPosts", "add", {
                body,
                rating,
            });

            return {
                posts,
                displayedPosts,
            };
        });
    }

    getPosts(count, page) {
        const posts = [...this.state.posts];
        const start = (page - 1) * count;
        const end = start + count;
        const toBeDisplayedPosts = posts.slice(start, end);
        this.setState({ displayedPosts: toBeDisplayedPosts });
    }

    searchTextInPost(post, text) {
        let match = false;

        if (post.title.includes(text) || post.description.includes(text)) {
            return true;
        }

        post.comments.forEach((comment) => {
            if (comment.body.includes(text)) {
                match = true;
                return;
            }
        });

        return match;
    }

    search(text) {
        const posts = this.state.posts.reduce((posts, post) => {
            const match = this.searchTextInPost(post, text);
            match && posts.push(post);
            return posts;
        }, []);

        this.setState({ displayedPosts: posts });
    }

    render() {
        return (
            <div className="App">
                <Pool
                    search={(text) => this.search(text)}
                    posts={this.state.displayedPosts}
                    getPosts={(count, page) => this.getPosts(count, page)}
                    postsCount={this.state.posts.length}
                    addComment={(body, rating, id) => this.addComment(body, rating, id)}
                />
                <aside className="lists">
                    {[1, 2].map((item) => (
                        <List
                            key={item}
                            posts={this.state.displayedPosts}
                            togglePostVisibility={(id) => this.togglePostVisibility(id)}
                        />
                    ))}
                </aside>
            </div>
        );
    }
}

export default App;
