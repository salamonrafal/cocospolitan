import React, { Component } from 'react';
import {connect} from 'react-redux';

import GeneralLayout from '../../components/Layouts/General';
import Style from './app.scss';

class App extends Component {

    render () {
        return (
            <GeneralLayout />
        )
    };
}

function mapStateToProps(state, ownProps) {  
    return {
        
    };
}

function mapDispatchToProps(dispatch) {  
    return {
        
    };
}     

export default connect(mapStateToProps, mapDispatchToProps)(App); 