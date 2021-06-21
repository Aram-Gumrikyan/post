import { Component } from "react";
import Main from "./components/Main";
import List from "./components/List";
import "./styles/App.scss";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pool: [
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
            ],
        };
    }

    togglePoolVisual(id) {
        const postIndex = this.state.pool.findIndex((post, index) => post.id === id);
        this.setState((state) => {
            const pool = [...state.pool];
            const post = { ...pool[postIndex] };
            post.disabled = !post.disabled;
            pool[postIndex] = post;

            return {
                pool,
            };
        });
    }

    render() {
        return (
            <div className="App">
                <Main pool={this.state.pool} />
                <aside className="lists">
                    {[1, 2].map((item) => (
                        <List
                            key={`list-${item}`}
                            pool={this.state.pool}
                            togglePoolVisual={(id) => this.togglePoolVisual(id)}
                        />
                    ))}
                </aside>
            </div>
        );
    }
}

export default App;
