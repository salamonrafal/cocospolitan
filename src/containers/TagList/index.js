import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Style from './taglist.scss';

import Tags from '../../components/Tags';
import {} from './actions.js';


class TagList extends Component {

    constructor (props) {
        super(props);
    }

    componentWillMount () {
        
    }

    render () {      
        let tags = this.props.headlines.getTags();  

        return (
            <div className={'taglist-wrapper'}>
                <Tags tags={tags} />
            </div>
        );

    };
}

function mapStateToProps(state, ownProps) {  
    return {
        config: state.app.config
    };
}

function mapDispatchToProps(dispatch) {  
    return {
        loadHedlines () {
            dispatch(this.loadDataBefore());
        }
    };
}     

export default connect(mapStateToProps, mapDispatchToProps)(TagList); 