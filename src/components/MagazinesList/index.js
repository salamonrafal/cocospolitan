import React, { Component } from 'react';

import Style from './style.scss';
import MagazinesImageItem from '../MagazinesImageItem';

class MagazinesList extends Component {
    render() {
        let { data, display, onClickImage, navigation, currentFullSizeImage, handleRefreshModalWindowContent } = this.props;

        return (
            <div className={'magazines-list-container'}>
                <ul className={'magazines-list'}>
                    {Object.keys(data).map (key => 
                        <MagazinesImageItem 
                            imagePathMini= {data[key].image_mini} 
                            imagePathFull={data[key].image_full} 
                            caption = {data[key].caption} 
                            index={key}
                            key={key}
                            display={display}
                            onClickImage={onClickImage}
                            navigation={navigation}
                            currentFullSizeImage={currentFullSizeImage}
                            handleRefreshModalWindowContent={handleRefreshModalWindowContent}
                        /> 
                    )}
                </ul>
            </div>
        );
    }
}

export default MagazinesList;