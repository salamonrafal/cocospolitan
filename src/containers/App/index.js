import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GeneralLayout from '../../components/Layouts/General';
import Style from './app.scss';

import * as AppActions from './actions.js';
import Config from '../../commons/config/config.js';

function mapStateToProps(state, ownProps) {  

    let config = new Config(__ENV__);

    return {
        headlines: state.headlines
    };
}

function mapDispatchToProps(dispatch) {  
    return bindActionCreators(AppActions, dispatch);
}     

export default connect(mapStateToProps, mapDispatchToProps)(GeneralLayout); 