import React, { createContext, useState } from 'react';

export const ThemeContext = createContext()

const ThemeSwitcher = ({children}) => {
    const storedTheme = localStorage.getItem('theme')
    const [theme,setTheme] = useState(storedTheme)
    const [dark,setDark] = useState(false)
    const handleDarkMode = ()=>{

        setDark(!dark)
  
        if(storedTheme==='dark'){
          localStorage.setItem('theme','light')
        }
        else{
          localStorage.setItem('theme','dark')
        }
        setTheme(localStorage.getItem('theme'))
        // console.log(dark)
        
      }
  

    const themeInfo = {theme,handleDarkMode}
    return (
        <ThemeContext.Provider value={themeInfo}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeSwitcher;