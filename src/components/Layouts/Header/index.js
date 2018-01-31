import React, { Component } from 'react';

import Style from './header.scss';
import LogoHeader from '../../../../images/cocospolitan-logo-web.png';
import { topText } from '../../../commons/labels/Header.js';

class LayoutHeader extends Component {
    render() {
        return (
            <div className={'header-body'}>
                <div className={'header-text_top'}>
                    <span className={'text-top_sentence'}>
                        {topText}
                    </span>
                </div>
                <div className={'header-logo'}>
                    <img src={LogoHeader} width="768" id="logo" title="COCOSPOLITAN" className={'image-logo'} />
                </div>
            </div>
        );
    }
}

export default LayoutHeader;