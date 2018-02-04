import React, { Component } from 'react';

import Style from './style.scss';

class MagazinesFullImage extends Component {
    render() {
        let { imagePathFull, caption, height } = this.props;

        return (
            <img src={imagePathFull} alt={caption} height={height} />
        );
    }
}

export default MagazinesFullImage;