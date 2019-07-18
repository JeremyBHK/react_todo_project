import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import Tasks from './tasks/Tasks';

class Rooter extends Component{
    render(){
        const Path = () => (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/tasks" component={Tasks}/>
            </Switch>
        )

        return(
            <Router>
                <Path />
            </Router>
        )
    }
}

export default Rooter