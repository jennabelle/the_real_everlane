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
})