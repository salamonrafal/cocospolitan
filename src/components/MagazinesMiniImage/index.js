import React, { Component } from 'react';

import Style from './style.scss';

class MagazinesMiniImage extends Component {
    render() {
        let { 
            imagePathMini, 
            caption, 
            width, 
            onClickImage, 
            preRenderedFullImage, 
            navigation 
        } = this.props;

        return (
            <img 
                src={imagePathMini} 
                alt={caption} 
                width={width} 
                onClick={() => {onClickImage(true, preRenderedFullImage, 'Okładki magazynów', navigation)} }
            />
        );
    }
}

export default MagazinesMiniImage;