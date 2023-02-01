import React from "react";
import {Route, Link} from 'react-router-dom';
import Shelter from './Shelter'
import { connect } from "react-redux";
import { deleteShelter } from "../actions/deleteShelter";

// const Shelters = (props) => {

class Shelters extends React.Component {


    handleDelete = (shelter) => {
        this.props.deleteShelter(shelter.id, shelter.shelter_id)
      }

    render(){ 
    return (
        <div>
            {this.props.shelters && this.props.shelters.map(shelter =>
                 <div key={shelter.id}>
                    <Link to={`/shelters/${shelter.id}`}>{shelter.kind}</Link><button onClick={() => this.handleDelete(shelter)}>Delete</button></div> )}
        </div>
    )
            }
}

// export default Shelters

export default connect(null, {deleteShelter})(Shelters)

