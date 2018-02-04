import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Style from './style.scss';

import { openModalWindowAction } from './actions.js';


class ModalWindow extends Component {

    constructor (props) {
        super(props);
    }

    componentWillMount () {
        
    }

    render () {      
        let { 
            modalOpened, 
            modalContent, 
            modalTitle,
            openModalWindow,
            modalFooter 
        } = this.props;
        let classNameVisible = ' hide';

        if (modalOpened) {
            classNameVisible = ' show';
        }

        return (
            <div className={'modal-wrapper' + classNameVisible}>
                <div className={'modal-conatiner'}>
                    <div className={'modal-header'}>
                        <h3 className={'modal-header-content'}>{modalTitle}</h3> 
                        <a className={'modal-close-top'} onClick={() => openModalWindow(false, '')}> X </a>
                    </div>

                    <div className={'modal-body'}>
                        <div className={'modal-content'}>
                            {modalContent}
                        </div>
                    </div>

                    <div className={'modal-footer'}>
                        {modalFooter}
                    </div>
                </div>
            </div>
        );

    };
}

function mapStateToProps(state, ownProps) {  
    return {
        config: state.app.config,
        modalOpened: state.modalWindow.modalOpened,
        modalContent: state.modalWindow.modalContent,
        modalTitle: state.modalWindow.modalTitle,
        modalFooter: state.modalWindow.modalFooter,
    };
}

function mapDispatchToProps(dispatch) {  
    return {
        openModalWindow(isOpen, content, title, footer) {
            dispatch(openModalWindowAction(isOpen, content, title, footer))
        }
    };
}     

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow); 