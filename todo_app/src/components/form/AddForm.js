import React, { Component } from 'react'
import ValidationBtn from '../button/ValidationBtn'

class AddForm extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Le nom a été soumis : ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} className="addForm">
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Coucou"/>
            <input type="checkbox" value={this.state.value} onChange={this.handleChange}/>
            <input type="checkbox" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <ValidationBtn value="Suivant"/>
        </form>
      );
    }
  }

  export default AddForm