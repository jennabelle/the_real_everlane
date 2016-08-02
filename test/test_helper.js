import _$ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import jsdom from 'jsdom';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import App from '../src/components/app';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducers from '../src/reducers';

// set up testing environment to run like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
const $ = _$(window);

// set up chai-jquery
chaiJquery(chai, chai.util, $);

// build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass) {
  const componentInstance =  TestUtils.renderIntoDocument(ComponentClass);

  return $(ReactDOM.findDOMNode(componentInstance));
}

// build helper for simulating events
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

// export functions
export {renderComponent, expect};
