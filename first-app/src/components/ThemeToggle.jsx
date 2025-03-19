import React, { useState } from "react";
import "./ThemeToggle.css";

export default function ThemeToggle() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div className={`theme-container ${theme}`}>
            <p>It's now {theme} theme</p>
            <button onClick={toggleTheme}>Change theme</button>
        </div>
    );
}
