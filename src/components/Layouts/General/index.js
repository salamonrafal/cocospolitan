import React, { Component } from 'react';
import Style from './general.scss';
import HeaderLayout from '../Header';
import TagList  from '../../../containers/TagList';


class LayoutGeneral extends Component {
    render() {

        return (
            <div className={'container'}>
            
                <div className={'container-header'}>
                    <HeaderLayout headlines={this.props.headlines} />
                    <TagList headlines = {this.props.headlines} />
                </div>

                <div className={'container-body'}>

                </div>

                <div className={'container-footer'}>
                
                </div>
            </div>
        );
    }
}

export default LayoutGeneral;