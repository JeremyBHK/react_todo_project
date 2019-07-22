import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './Home'
import Tasks from './tasks/Tasks'
import Admin from './admin/Admin'
import UrgentTask from './tasks/UrgentTask'
import RecurTask from './tasks/RecurTask'
import PrevTask from './tasks/PrevTask'
import AcceptTask from '../components/tasks/AcceptTask'
import AddTask from '../components/tasks/AddTask'

class Rooter extends Component{
    render(){
        const Path = () => (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/tasks" component={Tasks}/>
                <Route path="/admin" component={Admin}/>
                <Route path="/accept-task" component={AcceptTask}/>
                <Route path="/urgent-tasks" component={UrgentTask} />
                <Route path="/recurrent-tasks" component={RecurTask} />
                <Route path="/forecast-tasks" component={PrevTask} />
                <Route path="/add-tasks" component={AddTask} />
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
