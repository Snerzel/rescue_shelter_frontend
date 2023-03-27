import React from "react";
import {connect} from "react-redux";
import { addShelter } from "../actions/addShelter";

class ShelterAddForm extends React.Component {

    state = {kind: ''}

    handleChange = (event) => {
        this.setState({
            kind: event.target.value
            // [event.target.kind]: event.target.value
        }

        )
        console.log(this.state.kind)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.kind === "") {
            alert("Text field cannot be empty!")
        }else{
            this.props.addShelter(this.state)
            this.setState({
                kind: ''
            })
        }
    }

    render() {
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='Enter New Shelter Type' value={this.state.kind} name="kind" onChange={this.handleChange}/><br></br>
                <input type="submit"/>
               </form>
            </div>
        )
        
    }
}

export default connect(null, {addShelter})(ShelterAddForm)