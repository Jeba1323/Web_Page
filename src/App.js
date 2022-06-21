import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import Dashboard from "./pages/dashboard";
import Candidates from "./pages/candidates";
import Search from "./pages/search";
import Settings from "./pages/settings";

const App = () => {
    {
        return (
            <Router>
                <Navbar/>
                <Switch >
                    <Route path='/dashboard' component={Dashboard}/>
                    <Route path='/candidates' component={Candidates}/>
                    <Route path='/search' component={Search}/>
                    <Route path='/settings' component={Settings}/>
                </Switch>
            </Router>
        );
    }
}
export default App;

