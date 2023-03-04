import React from "react";
import { connect } from "react-redux";
import { deleteAnimal } from "../actions/deleteAnimal";


class Animals extends React.Component {
    
   

    handleDelete = (animal) => {
        this.props.deleteAnimal(animal.id, animal.shelter_id)
      }

   
    render(){
        return (

        <div>
            {this.props.animals && this.props.animals.map(animal =>
                <li key={animal.id}>{animal.kind} - {animal.name} - {animal.age} - {animal.info} - {animal.availability}<button onClick={() => this.handleDelete(animal)}>Delete</button></li>
                )}
        </div>

       
    )
    }
}

export default connect(null, {deleteAnimal})(Animals)