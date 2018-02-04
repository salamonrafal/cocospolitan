import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { setMagazines, changeVisibleItem } from './actions.js';
import { openModalWindowAction, refreshModalWindowAction } from '../ModalWindow/actions';
import MagazinesList from '../../components/MagazinesList';
import { headerLabelMagazine } from '../../commons/labels/General';
import Style from './style.scss';

import ButtonBack from '../../components/Visual/Button/Back';
import ButtonNext from '../../components/Visual/Button/Next';
import MagazinesGalleryNavigation  from '../MagazinesGalleryNavigation';


class MagazinesGallery extends Component {

    constructor (props) {
        super(props);
    }

    componentWillMount () {
        this._connectGetMagazinesData();
    }

    _connectGetMagazinesData() {
        try {
            axios.get(this.props.config.getConfig('services', 'magazines', 'get'))
            .then(res => {
                let lastItemId = this._getLastItemId(res.data);
                let fullSizeImage = res.data[lastItemId].image_full;
                this.props.setMagazinesData(res.data, lastItemId, this._getLengthItems(res.data), fullSizeImage);
            });    
        } catch (err) {
            console.error(err);
        }
        
    }

    _getLastItemId(data) {
        let lastItemId = 0;

        Object.keys(data).map((key) => {
            lastItemId = key;
        });

        return lastItemId;
    }

    _getLengthItems(data) {
        return Object.keys(data).length;
    }

    render () {


        return (
            <div className={'magazines-gallery-container'}>
                <div className={'magazines-gallery-header'}>
                    {headerLabelMagazine}
                </div>

                <MagazinesList 
                    data={this.props.magazinesData} 
                    display={this.props.visibleMagazines} 
                    onClickImage={this.props.handleOpenModalWindowAction} 
                    handleRefreshModalWindowContent = {this.props.handleRefreshModalWindowContent}
                    currentFullSizeImage={this.props.currentFullSizeImageMagazines}
                />

                <MagazinesGalleryNavigation />
                
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {  
    return {
        config: state.app.config,
        activeTag: state.tagList.activeTag,
        magazinesData: state.magazinesGallery.magazinesData,
        visibleMagazines: state.magazinesGallery.visibleMagazines,
        lengthMagazines: state.magazinesGallery.lengthMagazines,
        currentFullSizeImageMagazines: state.magazinesGallery.currentFullSizeImageMagazines,
    };
}

function mapDispatchToProps(dispatch) {  
    return {
        setMagazinesData(data, last, length, fullSizeImage) {
            dispatch(setMagazines(data, last, length, fullSizeImage));
        },

        changeVisibleMagazine(args) {
            dispatch(changeVisibleItem(args.itemId));
        },

        handleOpenModalWindowAction(isOPen, content, title, footer) {
            dispatch(openModalWindowAction(isOPen, content, title, footer));
        },

        handleRefreshModalWindowContent(content) {
            dispatch(refreshModalWindowAction(content));
        }
    };
}     

export default connect(mapStateToProps, mapDispatchToProps)(MagazinesGallery); 