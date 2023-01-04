import React from "react";
import {connect} from 'react-redux';
import { addAnimal } from "../actions/addAnimal";


class AnimalAddForm extends React.Component {

    state = {
        kind: '',
        name: '',
        age: '',
        info: '',
        availability: 'no'

    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleSubmit = (event) => {
        event.preventDefault()
        this.props.addAnimal(this.state, this.props.shelter.id)
        this.setState({
          kind: '',
          name: '',
          age: '',
          info: '',
          availability: 'no'
        })
      }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>What kind of animal is it:</label>
                    <input type="text" name="kind" value={this.state.kind} onChange={this.handleChange}/>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    <label>Approx Age:</label>
                    <input type="text" name="age" value={this.state.age} onChange={this.handleChange}/>
                    <label>info:</label>
                    <input type="text" name="info" value={this.state.info} onChange={this.handleChange}/>
                    <label>Available for Adoption:</label>
                    <select name="availability" value={this.state.availability} onChange={this.handleChange}>
                        <options>yes</options>
                        <options>no</options>
                    </select>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addAnimal})(AnimalAddForm)