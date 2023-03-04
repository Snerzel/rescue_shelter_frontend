import React from "react";
import { Redirect } from "react-router-dom";
import AnimalsContainer from "../containers/AnimalsContainer";

const Shelter = (props) => {

    

    // let shelter = props.shelters[props.match.params.id - 1]
    let shelter = props.shelters.filter(shelter => shelter.id === parseInt(props.match.params.id))[0]
    console.log(shelter)
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