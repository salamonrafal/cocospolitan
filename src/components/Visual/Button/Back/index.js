import React, { Component } from 'react';
import HtmlReactParser from 'html-react-parser';

import { labelButtonBack } from '../../../../commons/labels/Buttons';
import StyleBack from './style.scss';
import StyleMain from '../style.scss';

import ImageBack32 from './icon_back_32x32.png';


class ButtonBack extends Component {
        
    _clickHenadler(args) {
        let { onClickFn } = this.props;
        onClickFn(args);
    } 

    render() {
        let { withIcon, withText, onClickFn, iconWidth, buttonSize, noBorder, args } = this.props;
        let iconClass = '';
        let iconItem = '';
        let label = '';
        let noBorderClassName = '';
        let boundClick = this._clickHenadler.bind(this, args);

        if (withIcon) {
            iconClass = ' icon-' + iconWidth;
            iconItem = this._renderIconElement(iconWidth);
        }

        if (withText) {
            label = "<span>" + labelButtonBack + "</span>";
        }

        if (noBorder) {
            noBorderClassName = ' button-no-border';
        }

        return (
            <a onClick={boundClick} className={'button button-size-' + buttonSize + iconClass + noBorderClassName} title={labelButtonBack}>
                {HtmlReactParser(label)} {iconItem}
            </a>
        );
    }

    _renderIconElement (iconWidth) {
        let inlineStyle = {};

        switch(iconWidth) {
            case 32:
                inlineStyle = {
                    backgroundImage: 'url(' + ImageBack32 + ')'
                };
                break;
        }

        return (
            <span className={'icon-back-item-' + iconWidth} style={inlineStyle}></span>
        );
    }
}

export default ButtonBack;