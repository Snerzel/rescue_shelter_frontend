import React from "react";

const Shelters = (props) => {

    return (
        <div>
            {props.shelters.map(shelter => <li key={shelter.id}>{shelter.kind}</li> )}
        </div>
    )
}

export default Shelters