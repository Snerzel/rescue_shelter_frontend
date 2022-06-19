import React from "react";
import {connect} from 'react-redux'
import { Route } from "react-router-dom";
import Shelters from "../components/Shelters";
import Shelter from "../components/Shelter";
import ShelterAddForm from "../components/ShelterAddForm";
import {fetchShelters} from "../actions/fetchShelters";

class SheltersContainer extends React.Component {

    componentDidMount() {
        this.props.fetchShelters()
    }

    render() {
        return(
            <div>
                <Route path='./shelter/new' component={ShelterInput}/>
                <Route path='./shelters/:id'  render={(routerProps) => <Shelter {...routerProps} shelters={this.props.shelters} /> } />
                <Route exact path='/shelters' render={(routerProps) => <Shelters {...routerProps} shelters={this.props.shelters} /> } />
                
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