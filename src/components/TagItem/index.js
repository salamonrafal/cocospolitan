import React, { Component } from 'react';

import Style from './tagitem.scss';

// import { topText } from '../../../commons/labels/TagList.js';

class TagItem extends Component {
    render() {
        let {tagIndex, tag, isLast, headlines, onClickTagItem, activeTag} = this.props;
        let activeClassName = '';

        if (activeTag === tag.tagname) {
            activeClassName = ' selected'
        }

        return (
            <li key={tagIndex} className={'taglist-item' + activeClassName}>
                <a href="#" onClick={() => onClickTagItem(tag.tagname, [])}>#{tag.tagname}</a> 
                {!isLast &&
                    <span className={'item-separator'}> | </span>
                }
            </li>
        );
    }
}

export default TagItem;