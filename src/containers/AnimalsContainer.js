import React from "react";
import AnimalAddForm from "../components/AnimalAddForm";
import Animals from "../components/Animals";

class AnimalsContainer extends React.Component {

    render() {
        return (
            <div>
                <AnimalAddForm shelter={this.props.shelter}/>
                <Animals animals={this.props.shelter && this.props.shelter.animals}/>

            </div>
        )
    }
}

export default AnimalsContainer