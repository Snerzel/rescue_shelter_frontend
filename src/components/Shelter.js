import React from "react";
import {Redirect} from 'react-router-dom';
import AnimalsContainer from "../containers/AnimalsContainer";

const Shelter = (props) => {

    

    // let shelter = props.shelters[props.match.params.id - 1]
    let shelter = props.shelters.filter(shelter => shelter.id === props.match.params.id)[0]
    return (
        <div>
            <h3>
                {shelter ? null : <Redirect to='/shelters'/>}
                {shelter ? shelter.kind : null}
                
                
            </h3>
            <AnimalsContainer shelter={shelter}/>
        </div>
    )
}

export default Shelter