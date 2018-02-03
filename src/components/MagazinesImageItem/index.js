import React, { Component } from 'react';

import Style from './style.scss';

class MagazinesImageItem extends Component {
    render() {
        let { imagePathMini, imagePathFull, caption, index, display } = this.props;
        let classNameHide = ' hide';

        if (index == display) {
            classNameHide = ' show';
        }

        return (
            <li className={'magazines-list-item' + classNameHide}>
                <img src={imagePathMini} alt={caption} width={160} /><br />
                <span className={'magazines-list-item-caption'}>{caption}</span>
            </li>
        );
    }
}

export default MagazinesImageItem;