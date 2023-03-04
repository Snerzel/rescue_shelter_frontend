import React from 'react';
import { connect } from "react-redux";

const Home = () => {
    return (
        <div>
            <h2>Welcome!</h2>
             <p>
                This is the database for the Mock Valley Rescue Shelter. This is for keeping track of the animals currently at our shelter and what shelter types we currently have constructed.
             </p>
             <br></br>
             <p> 
                Here you can add a shelter to be built for a new animal or add an animal to an existing shelter. When a shelter type is empty it can be deleted to make room for more shelters to be built or taken down. Animals are also adopted or transferred out of our care so they can also be removed.  
             </p>
        </div>
    )
}


export default connect(null)(Home)