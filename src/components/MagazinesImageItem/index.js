import React, { Component } from 'react';

import Style from './style.scss';

class MagazinesImageItem extends Component {


    _renderFullImage(imagePathFull, caption) {
        return (
            <img src={imagePathFull} alt={caption} height="550px" />
        );
    }

    render() {
        let { imagePathMini, imagePathFull, caption, index, display, onClickImage, navigation } = this.props;
        let classNameHide = ' hide';

        if (index == display) {
            classNameHide = ' show';
        }

        let preRenderedFullImage = this._renderFullImage(imagePathFull, caption);

        return (
            <li className={'magazines-list-item' + classNameHide}>
                <img src={imagePathMini} alt={caption} width={160} onClick={() => onClickImage(true, preRenderedFullImage, 'Okładki magazynów', '') }/><br />
                <span className={'magazines-list-item-caption'}>{caption}</span>
            </li>
        );
    }
}

export default MagazinesImageItem;