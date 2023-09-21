import React from "react"
import { useState } from "react"


export const ThemeContext = React.createContext('light')



function ThemeProvider({ children }) {

    const [darkMode, setDarkMode] = useState(true)

    function toggleTheme() {
        setDarkMode(prevDarkMode => !prevDarkMode)
    }
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
    const buttonText = darkMode ? 'Light Mode' : 'Dark Mode'
    return (
        <>
            <ThemeContext.Provider value={darkMode}>
                <button onClick={toggleTheme} style={styleObj}>{buttonText}</button>
                {children}
            </ThemeContext.Provider>
        </>
    )

}

export default ThemeProvider
