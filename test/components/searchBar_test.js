import { renderComponent , expect } from '../test_helper'
import React from 'react'
import SearchBar from '../../src/components/searchBar'

describe('SearchBar' , () => {
  let component

  beforeEach(() => {
    component = renderComponent( React.createElement(SearchBar) )
  })

  it('renders something', () => {
    expect(component).to.exist
  })

  it('has the correct class', () => {
  	expect(component).to.have.class('searchBar_wrapper')
  })
})