import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import GeneralLayout from '../../components/Layouts/General';
import Style from './app.scss';

import {setHeadlines, setApplicationConfig } from './actions.js';
import Config from '../../commons/config/config.js';
import Headlines from '../../commons/helpers/Headlines.js';


class App extends Component {

    constructor (props) {
        super(props);

        this.config = new Config(__ENV__);
    }

    requestHeadlines () {
        axios.get(this.config.getConfig('services', 'headlines', 'get'))
            .then(res => {
                let headlines = new Headlines(res.data);
                this.props.setHeadlinesDataApp(headlines);
            });
    }

    componentWillMount () {
        this.props.setConfigApp(this.config);
        this.requestHeadlines();
    }

    render () {
        return (
            <GeneralLayout 
                config={this.props.config} 
                headlines={this.props.headlines} 
                activeTag={this.props.activeTag}
            />
        )
    };
}

function mapStateToProps(state, ownProps) {  
    return {
        headlines: state.app.headlines,
        config: state.app.config,
        activeTag: state.tagList.activeTag,
    };
}

function mapDispatchToProps(dispatch) {  
    return {
        setHeadlinesDataApp(headlines) {
            dispatch(setHeadlines(headlines))
        },

        setConfigApp(config) {
            dispatch(setApplicationConfig(config))
        }
    };
}     

export default connect(mapStateToProps, mapDispatchToProps)(App); 