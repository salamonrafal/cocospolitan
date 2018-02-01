import React, { Component } from 'react';

import Style from './headlineitem.scss';

// import { topText } from '../../../commons/labels/TagList.js';

class HeadlineItem extends Component {
    render() {
        let {id, tags, visible, children} = this.props;

        return (
            <div className={'headline-item'}>
                <div className={'headline-row'}>
                    <div className={'headline-item-content'}>
                        {this.props.children}
                    </div>
                </div>

                <div className={'headline-row'}>
                    <div className={'headline-item-bottom'}>
                        {tags.map((tags, i) => <span key={i} className={'tags'}>#{tags}</span> )}
                        
                    </div>
                </div>
            </div>
        );

    }
}

export default HeadlineItem;