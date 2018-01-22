import React, { Component } from 'react';

import Style from './header.scss';
import LogoHeader from '../../../../images/cocospolitan-logo-web.png';

class LayoutHeader extends Component {
    render() {
        return (
            <div className={'header-body'}>
                <img src={LogoHeader} width="768" title="COCOSPOLITAN" className={'image-logo'} />
            </div>
        );
    }
}

export default LayoutHeader;