import { renderComponent , expect } from '../test_helper'
import React from 'react'
import App from '../../src/components/app'

describe('App' , () => {
  let component

  beforeEach(() => {
    component = renderComponent( React.createElement(App) )
  })

  it('renders something', () => {
    expect(component).to.exist
  })

  it('has the correct class', () => {
  	expect(component).to.have.class('app_background')
  })

  // it('has a input text area', () => {
  // 	// expect(component.find('textarea')).to.exist;
  // })

  // it('shows the correct text', () => {
  // 	// expect(component).to.contain('React simple starter');
  // });

  // it('pressing enter displays tweets', () => {
  // 	// simulate enter
  // 	// shows a tweet in specific styled way
  // });

  // it('given a list of tweets, it shows all the tweets', () => {

  // });

})