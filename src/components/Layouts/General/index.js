import React, { Component } from 'react';
import Style from './general.scss';
import HeaderLayout from '../Header';
import TagList  from '../../../containers/TagList';
import HeadlinesList from '../../HeadlinesList';
import MagazinesGallery from "../../../containers/MagazinesGallery";
import ModalWindow from '../../../containers/ModalWindow';


class LayoutGeneral extends Component {
    render() {

        return (
            <div className={'container'}>

                <ModalWindow title={'Test modal'} />
            
                <div className={'container-header'}>
                    <HeaderLayout headlines={this.props.headlines} />
                    <TagList headlines = {this.props.headlines} />
                </div>

                <div className={'container-body'}>

                    <div className={'column-wrapper'}>

                        <div className={'container-left-column'}>
                            <HeadlinesList headlines = {this.props.headlines} refreshHeadlines = {this.props.refreshHeadlines} activeTag = {this.props.activeTag}  />
                        </div>
                        
                        <div className={'container-right-column'}>
                            <MagazinesGallery />
                        </div>

                    </div>

                </div>

                <div className={'container-footer'}>
                
                </div>
            </div>
        );
    }
}

export default LayoutGeneral;