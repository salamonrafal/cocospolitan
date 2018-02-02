import React, { Component } from 'react';

import Style from './taglist.scss';
import TagItem from '../TagItem';
import ClearTag from '../ClearTag';

// import { topText } from '../../../commons/labels/TagList.js';

class Tags extends Component {
    render() {
        let tags = this.props.tags.getAll();
        let len = tags.length;

        console.log(this.props);

        return (
            <div className={'taglist-container'}>
                <ul className={'taglist-items'}>
                    {tags.map((tags, i) => 
                        <TagItem 
                            key={i} 
                            tagIndex={i} 
                            tag={tags} 
                            headlines={this.props.headlines} 
                            onClickTagItem={this.props.onClickTagItem} 
                            isLast={ i >= (len -1) ? true : false} 
                            activeTag={this.props.activeTag}
                        /> 
                    )}

                    <ClearTag 
                        key={tags.length} 
                        activeTag={this.props.activeTag} 
                        onClickTagItem={this.props.onClickTagItem}
                        headlines={this.props.headlines} 
                    />
                </ul>
            </div>
        );
    }
}

export default Tags;