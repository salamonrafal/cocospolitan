import React, { Component } from 'react';
import Style from './cleartag.scss';
import { clearTagButton, clearTagButtonHint } from '../../commons/labels/General.js';



class ClearTag extends Component {
    render() {
        let {onClickTagItem, activeTag, headlines} = this.props;

        return (
            <li className={'taglist-item taglist-item-right'}>
                <span className={'item-separator'}> | </span> 
                <a href="#" className={'action-clear'} title={clearTagButtonHint} onClick={() => {
                    let changedHeadlines = headlines.showHeadlinesByTag('');
                    onClickTagItem('', changedHeadlines);
                }}> {clearTagButton} </a>
            </li>
        );
    }
}

export default ClearTag;