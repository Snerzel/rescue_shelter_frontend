import React from 'react';
import { connect } from "react-redux";

const Home = ({props}) => {
    return (
        <div>
            <h2>Mock Valley Rescue Shelter</h2>
             {/* {props.shelters.map(shelter => 
                <li>key={shelter.kind}</li>
                )}  */}
        </div>
    )
}


export default connect(null)(Home)