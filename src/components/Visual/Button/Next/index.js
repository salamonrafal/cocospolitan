import React, { Component } from 'react';
import HtmlReactParser from 'html-react-parser';

import { labelButtonNext } from '../../../../commons/labels/Buttons';
import StyleNext from './style.scss';
import StyleMain from '../style.scss';

import ImageNext32 from './icon_next_32x32.png';


class ButtonNext extends Component {


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
            label = "<span>" + labelButtonNext + "</span>";
        }

        if (noBorder) {
            noBorderClassName = ' button-no-border';
        }

        return (
            <a onClick={boundClick} className={'button button-size-' + buttonSize + iconClass + noBorderClassName} title={labelButtonNext}>
                {HtmlReactParser(label)} {iconItem}
            </a>
        );
    }

    _renderIconElement (iconWidth) {
        let inlineStyle = {};

        switch(iconWidth) {
            case 32:
                inlineStyle = {
                    backgroundImage: 'url(' + ImageNext32 + ')'
                };
                break;
        }

        return (
            <span className={'icon-next-item-' + iconWidth} style={inlineStyle}></span>
        );
    }
}

export default ButtonNext;