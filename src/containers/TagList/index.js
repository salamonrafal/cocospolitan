import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Style from './taglist.scss';

import Tags from '../../components/Tags';

import { selectTag } from './actions.js';


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
                <Tags 
                    tags={tags}
                    headlines={this.props.headlines}
                    onClickTagItem={this.props.onClickSelectTag}  
                    activeTag={this.props.activeTag}
                    refreshHeadlines={this.props.refreshHeadlines}
                />
            </div>
        );

    };
}

function mapStateToProps(state, ownProps) {  
    return {
        config: state.app.config,
        headlines: state.app.headlines,
        activeTag: state.tagList.activeTag,
        refreshHeadlines: state.app.refreshHeadlines
    };
}

function mapDispatchToProps(dispatch) {  
    return {
        onClickSelectTag (activeTag, headlines) {
             dispatch(selectTag(headlines, activeTag));
        }
    };
}     

export default connect(mapStateToProps, mapDispatchToProps)(TagList); 