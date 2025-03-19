import React from "react";
import Greeting from "./components/Greeting.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import LoginMessage from "./components/LoginMessage.jsx";
import TodoList from "./components/TodoList.jsx";
import './index.css';

function App() {
    const tasks = ["Eat", "Study", "Walk", "Read", "Relax", "Sleep"];

    return (
        <div>
            {/* Greeting in a red frame */}
            <div className="red-frame">
                <Greeting name="Stanislav" />
            </div><br></br>

            {/* Theme toggle (without a red frame) */}
            <ThemeToggle />

            {/* Login message in a red frame */}
            <div className="red-frame">
                <LoginMessage isLoggedIn={true} />
            </div><br></br>

            {/* My tasks for today in a red frame */}
            <div className="red-frame">
                <h2>My tasks for today</h2>
                <TodoList todos={tasks} />
            </div>
        </div>
    );
}

export default App;

