import React from "react";
import Greeting from "./components/Greeting.jsx";

function App() {
    return (
        <div>
            <Greeting name="Stanislav" />
            <ThemeToggle />
            <LoginMessage isLoggedIn={true} />
        </div>
    );
}

export default App;
