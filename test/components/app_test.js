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

  it('shows a search bar wrapper class', () => {
  	expect(component.find('.searchBar_wrapper')).to.exist
  })

  it('shows a search bar class', () => {
  	expect(component.find('.searchBar')).to.exist
  })

  it('shows view tweets class', () => {
  	expect(component.find('.view_tweets')).to.exist
  })
})