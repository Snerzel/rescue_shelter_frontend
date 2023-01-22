import React from "react";
import { connect } from "react-redux";
import { deleteAnimal } from "../actions/deleteAnimal";

class Animals extends React.Component {

    

    handleDelete = (animal) => {
        this.props.deleteAnimal(animal.id, animal.shelter_id)
      }
    render(){
        return (

        <dive>
            {this.props.animals && this.props.animals.map(animal =>
                <li key={animal.id}>{animal.kind} - {animal.availability} - {animal.age} - {animal.name} - {animal.info}<button onClick={() => this.handleDelete(animal)}>Delete</button> </li>
                )}
        </dive>
    )
    }
}

export default connect(null, {deleteAnimal})(Animals)