import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { setMagazines, changeVisibleItem } from './actions.js';
import {openModalWindowAction} from '../ModalWindow/actions';
import MagazinesList from '../../components/MagazinesList';
import { headerLabelMagazine } from '../../commons/labels/General';
import Style from './style.scss';

import ButtonBack from '../../components/Visual/Button/Back';
import ButtonNext from '../../components/Visual/Button/Next';


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
                this.props.setMagazinesData(res.data, this._getLastItemId(res.data), this._getLengthItems(res.data));
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

        let preRenderedNavigation = this._preRenderedNavigation();

        return (
            <div className={'magazines-gallery-container'}>
                <div className={'magazines-gallery-header'}>
                    {headerLabelMagazine}
                </div>

                <MagazinesList 
                    data={this.props.magazinesData} 
                    display={this.props.visible} 
                    onClickImage={this.props.handleOpenModalWindowAction} 
                    navigation={preRenderedNavigation} 
                />

                {preRenderedNavigation}
                
            </div>
        );
    }

    _preRenderedNavigation () {
        let isRenderNextButton = this.props.visible < this.props.length - 1;
        let isRenderBackButton = this.props.visible > 0;
        let preRenderedNextButton = this._renderButtonNext();
        let preRenderedBackButton = this._renderButtonBack();
        
        if (!isRenderBackButton) {
            preRenderedBackButton = '';
        }

        if (!isRenderNextButton) {
            preRenderedNextButton = '';
        }

        return (
            <div className={'magazines-gallery-navigation'}>
                <div className={'left'}>
                    {preRenderedBackButton}
                </div>

                <div className={'right'}>
                    {preRenderedNextButton}
                </div>
            </div>
        )
    }
    
    _renderButtonNext () {
        let args = {
            itemId: this.props.visible + 1
        }

        return (
            <ButtonNext 
                withIcon={true} 
                withText={false} 
                iconWidth={32}
                buttonSize='medium'
                noBorder={true}
                onClickFn={this.props.changeVisibleMagazine}
                args={args}
            />
        );
    }

    _renderButtonBack () {

        let args = {
            itemId: this.props.visible - 1
        }

        return (
            <ButtonBack 
                withIcon={true} 
                withText={false} 
                iconWidth={32}
                buttonSize='medium'
                noBorder={true}
                onClickFn={this.props.changeVisibleMagazine}
                args={args}
            />
        );
    }
}

function mapStateToProps(state, ownProps) {  
    return {
        config: state.app.config,
        activeTag: state.tagList.activeTag,
        magazinesData: state.magazinesGallery.magazinesData,
        visible: state.magazinesGallery.visible,
        length: state.magazinesGallery.length
    };
}

function mapDispatchToProps(dispatch) {  
    return {
        setMagazinesData(data, last, length) {
            dispatch(setMagazines(data, last, length));
        },

        changeVisibleMagazine(args) {
            dispatch(changeVisibleItem(args.itemId));
        },

        handleOpenModalWindowAction(isOPen, content, title, footer) {
            dispatch(openModalWindowAction(isOPen, content, title, footer));
        }
    };
}     

export default connect(mapStateToProps, mapDispatchToProps)(MagazinesGallery); 