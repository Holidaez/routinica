import React, { createContext } from "react"
import { useState } from "react"

export const ThemeContext = createContext()

function ThemeProvider({ children }) {

    const [darkMode, setDarkMode] = useState(false)
    const styleObj = {
        'zIndex': '10',
        'right':'18px',
        'top':'93px',
        'borderRadius':'5px',
        'fontSize': '15px',
        'backgroundColor': '#6f42c1',
        'color':'white',
        'padding':'5px',
        'position':'absolute'
    }
    let buttonText;
    darkMode ? buttonText = 'Light Mode' : buttonText = 'Dark Mode'
    return (
        <>
        <button style={styleObj} onClick={() => setDarkMode(!darkMode)}>{buttonText}</button>
        <ThemeContext.Provider value={darkMode}>
            {children}
        </ThemeContext.Provider>
        </>
    )

}

export default ThemeProvider
