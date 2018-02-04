import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import {  } from './actions.js';
import { setMagazines, changeVisibleItem } from '../MagazinesGallery/actions';
import { openModalWindowAction, refreshModalWindowAction } from '../ModalWindow/actions';

import { headerLabelMagazine } from '../../commons/labels/General';
import Style from './style.scss';

import ButtonBack from '../../components/Visual/Button/Back';
import ButtonNext from '../../components/Visual/Button/Next';


class MagazinesGalleryNavigation extends Component {

    constructor (props) {
        super(props);
    }

    componentWillMount () {
    }

    render () {
        let { visibleMagazines, lengthMagazines } = this.props;

        let isRenderNextButton = visibleMagazines < lengthMagazines - 1;
        let isRenderBackButton = visibleMagazines > 0;
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
        );
    }

    _renderButtonNext () {
        let args = {
            itemId: this.props.visibleMagazines + 1
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
            itemId: this.props.visibleMagazines - 1
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
        magazinesData: state.magazinesGallery.magazinesData,
        visibleMagazines: state.magazinesGallery.visibleMagazines,
        lengthMagazines: state.magazinesGallery.lengthMagazines,
        currentFullSizeImageMagazines: state.magazinesGallery.currentFullSizeImageMagazines,
    };
}

function mapDispatchToProps(dispatch) {  
    return {
        changeVisibleMagazine(args) {
            dispatch(changeVisibleItem(args.itemId));
        },
    };
}     

export default connect(mapStateToProps, mapDispatchToProps)(MagazinesGalleryNavigation); 