import React from "react";
import {connect} from 'react-redux'
import { Route, Switch } from "react-router-dom";
import Shelters from "../components/Shelters";
import Shelter from "../components/Shelter";
import ShelterAddForm from "../components/ShelterAddForm";
import {fetchShelters} from "../actions/fetchShelters";
import NavBar from '../components/NavBar'

class SheltersContainer extends React.Component {

    componentDidMount() {
        this.props.fetchShelters()
    }

    render() {
        return(
            <div>
                <NavBar/>
                <Switch>
                    <Route exact path='/shelters/new' component={ShelterAddForm}/>
                    <Route exact path='/shelters/:id'  render={(routerProps) => <Shelter {...routerProps} shelters={this.props.shelters} /> } />
                    <Route exact path='/shelters' render={(routerProps) => <Shelters {...routerProps} shelters={this.props.shelters} /> } />
                    
                </Switch>
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