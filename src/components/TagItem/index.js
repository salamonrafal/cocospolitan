import React, { Component } from 'react';

import Style from './taglist.scss';

// import { topText } from '../../../commons/labels/TagList.js';

class TagItem extends Component {
    render() {
        let {tagIndex, tag, isLast} = this.props;

        return (
            <li key={tagIndex} className={'taglist-item'}>
                <a href="#">#{tag.tagname}</a> 
                {!isLast &&
                    <span className={'item-separator'}> | </span>
                }
            </li>
        );
    }
}

export default TagItem;