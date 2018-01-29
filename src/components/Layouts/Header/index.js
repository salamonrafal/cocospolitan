import React, { Component } from 'react';

import Style from './header.scss';
import LogoHeader from '../../../../images/cocospolitan-logo-web.png';

class LayoutHeader extends Component {
    render() {
        return (
            <div className={'header-body'}>
                <div className={'header-text_top'}>
                    <span className={'text-top_sentence'}>Koksić każdy może, ale my to robimy najabrdziej</span>
                </div>
                <div className={'header-logo'}>
                    <img src={LogoHeader} width="768" title="COCOSPOLITAN" className={'image-logo'} />
                </div>
            </div>
        );
    }
}

export default LayoutHeader;