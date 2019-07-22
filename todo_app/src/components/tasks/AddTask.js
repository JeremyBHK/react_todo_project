import React, { Component } from 'react'
import MenuAddTask from '../MenuAddTasK'
import AddForm from '../form/AddForm'

class AddTask extends Component{
    async componentWillMount() {
        const apiUrl = "http://127.0.0.1:8000/api/users"
        const req = await fetch(apiUrl)
        const users = await req.json()
       console.log(users) 
      }

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