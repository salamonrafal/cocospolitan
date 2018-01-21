import React, { Component } from 'react';
import Style from './general.scss';
import HeaderLayout from '../Header';


class LayoutGeneral extends Component {
    render() {

        return (
            <div className={'container'}>
            
                <div className={'container-header'}>
                    <HeaderLayout />
                </div>

                <div className={'container-body'}></div>
                <div className={'container-footer'}></div>
            </div>
        );
    }
}

export default LayoutGeneral;