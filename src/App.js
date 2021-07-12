import Pool from "./components/Pool";
import List from "./components/List";
import "./App.scss";

const App = () => {
    return (
        <div className="App">
            <Pool />

            <aside className="lists">
                {[1, 2].map((item) => (
                    <List key={item} />
                ))}
            </aside>
        </div>
    );
};

export default App;
