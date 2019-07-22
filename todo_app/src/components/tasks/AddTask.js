import React, { Component } from 'react'
import MenuAddTask from '../MenuAddTasK'
import AddForm from '../form/AddForm'

class AddTask extends Component{
    render(){
        return(
            <section className="add-task">
                <h1>Déposer une tâche</h1>
                <div>
                    <img src="" alt="" />
                </div>
                <h2>De quoi avez-vous besoin ?</h2>
                <AddForm />
                <MenuAddTask />
            </section>
        )
    }
}

export default AddTask