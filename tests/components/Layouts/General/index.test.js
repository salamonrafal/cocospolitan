import React from 'react';
import {render} from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import {expect, assert} from 'chai';
import LayoutGeneral from '../../../../src/components/Layouts/General/index.js';


describe('general Layout', function () {
    let layoutGeneralRenerend;

    before(function() {
        layoutGeneralRenerend = ReactTestUtils.renderIntoDocument(<LayoutGeneral />);
    });
    
    it('is component exists', function () {
      expect(layoutGeneralRenerend).to.exist;
    });

    it('has container', () => {
        assert.isOk(
            ReactTestUtils.findRenderedDOMComponentWithClass (
                layoutGeneralRenerend,
                'container'
            ),

            'I cannot find container in general layout'
        );
    });

    it('has container header', () => {
        assert.isOk(
            ReactTestUtils.findRenderedDOMComponentWithClass (
                layoutGeneralRenerend,
                'container-header'
            ),

            'I cannot find container-header in general layout'
        );
    });

    it('has container body', () => {
        assert.isOk(
            ReactTestUtils.findRenderedDOMComponentWithClass (
                layoutGeneralRenerend,
                'container-body'
            ),

            'I cannot find container-body in general layout'
        );
    });

    it('has container footer', () => {
        assert.isOk(
            ReactTestUtils.findRenderedDOMComponentWithClass (
                layoutGeneralRenerend,
                'container-footer'
            ),

            'I cannot find container-footer in general layout'
        );
    });

});