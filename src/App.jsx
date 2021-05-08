import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './components/Home';
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme, GlobalStyles, lightTheme } from './themes'
import './App.css'
import { BrightnessHighFill, List, Moon } from 'react-bootstrap-icons';
import Register from './components/Register';


const App = () => {
    const [theme, setTheme] = useState('Light')
    const themeToggler = () => {
        theme === 'Light' ? setTheme('Dark') : setTheme('Light')
    }
    const StyledApp = styled.div`
    color: ${(props) => props.theme.fontColor};
`;

    return (
        <ThemeProvider theme={theme === 'Light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <StyledApp>
                <Router>
                    <div className={"btn" + theme + " " + theme + " btn btn" + theme + "Mode"} onClick={themeToggler}>
                        {theme === 'Light' ? <Moon color='white' /> : <BrightnessHighFill />}
                    </div>
                    <Switch>
                        <Route path='/lappa/register' component={() => <Register theme={theme} />} />
                        <Route path='/lappa/' component={() => <Home theme={theme} />} />
                    </Switch>
                </Router>
            </StyledApp>
        </ThemeProvider>)
}
export default App;