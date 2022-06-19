import React from "react";
import Shelter from './Shelter'

const Shelters = (props) => {

    return (
        <div>
            {props.shelters.map(shelter => <div key={shelter.id}><Shelter shelter={shelter}/></div> )}
        </div>
    )
}

export default Shelters