import React, { Component } from 'react';

import Style from './style.scss';

import MagazinesFullImage from '../MagazinesFullImage';
import MagazinesMiniImage from '../MagazinesMiniImage';

class MagazinesImageItem extends Component {


    _renderFullImage(imagePathFull, caption) {
        return (
            <MagazinesFullImage imagePathFull={imagePathFull} caption={caption} height={'550px'} />
        );
    }

    render() {
        let { imagePathMini, imagePathFull, caption, index, display, onClickImage, navigation, currentFullSizeImage, handleRefreshModalWindowContent } = this.props;
        let classNameHide = ' hide';

        if (index == display) {
            classNameHide = ' show';
        }

        let preRenderedFullImage = this._renderFullImage(imagePathFull, caption);

        return (
            <li className={'magazines-list-item' + classNameHide}>
                <MagazinesMiniImage 
                    imagePathMini={imagePathMini}
                    caption={caption}
                    width={'165px'}
                    onClickImage={onClickImage}
                    preRenderedFullImage={preRenderedFullImage}
                    navigation={navigation}
                />
                <br />
                <span className={'magazines-list-item-caption'}>
                    {caption}
                </span>
            </li>
        );
    }
}

export default MagazinesImageItem;