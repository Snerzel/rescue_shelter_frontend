import React from "react";
import {connect} from 'react-redux'
import Shelters from "../components/Shelters";
import ShelterAddForm from "../components/ShelterAddForm";
import {fetchShelters} from "../actions/fetchShelters";

class SheltersContainer extends React.Component {

    componentDidMount() {
        this.props.fetchShelters()
    }

    render() {
        return(
            <div>
                <ShelterAddForm/>
                <Shelters shelters={this.props.shelters}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        shelters: state.shelters
    }
}

export default connect(mapStateToProps, {fetchShelters})(SheltersContainer)