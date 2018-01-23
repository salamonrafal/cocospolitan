import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import {expect} from 'chai';
import LayoutHeader from '../../../../src/components/Layouts/Header/index.js';


describe('header Layout', function () {
    
    it('is component exists', function () {
      let layoutHeaderRenerend = ReactTestUtils.renderIntoDocument(<LayoutHeader />);
      expect(layoutHeaderRenerend).to.exist;
    });

});