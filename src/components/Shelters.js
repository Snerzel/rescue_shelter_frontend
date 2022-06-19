import React from "react";
import {Route, Link} from 'react-router-dom';
import Shelter from './Shelter'

const Shelters = (props) => {

    return (
        <div>
            {props.shelters.map(shelter => <div key={shelter.id}><Link to={'/shelters/${shelter.id}'}>{shelter.kind}</Link></div> )}
        </div>
    )
}

export default Shelters

