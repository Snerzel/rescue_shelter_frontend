import React from 'react';
import { connect } from "react-redux";

const Header = ({props}) => {
    return (
        <div>
            <h2 style={{color: "blue"}}>Mock Valley Rescue Shelter</h2>
             
        </div>
    )
}


export default connect(null)(Header)