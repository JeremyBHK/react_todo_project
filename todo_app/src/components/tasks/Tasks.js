import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

class Tasks extends Component{
    render(){
        return(
            <div>
                <Link to="/" title="vjldfjld">
                    Lien vers la home
                </Link>
            </div>
        )
    }
}

export default Tasks 