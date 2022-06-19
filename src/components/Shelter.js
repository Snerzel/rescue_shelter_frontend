import React from "react";

const Shelter = (props) => {

    console.log(props)

    let shelter = props.shelters[props.match.params.id - 1]

    return (
        <li>
            {shelter ? shelter.kind : null}
            {/* {props.shelter.kind} */}
        </li>
    )
}

export default Shelter